import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).end();
  }

  try {
    const { postId } = req.body;
    const { currentUser } = await serverAuth(req, res);

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid Id");
    }

    const post = prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new Error("Invalid Id");
    }

    let updateLikedIds = [...(post.likedIds || [])];

    if (req.method === "POST") {
      updateLikedIds.push(currentUser.id);
    }

    if (req.method === "DELETE") {
      updateLikedIds = updateLikedIds.filter(
        (likedId) => likedId !== currentUser.id
      );
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likedIds: updateLikedIds,
      },
    });

    return res.status(200).json(updateLikedIds);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
}
