import useLoginModel from "@/hooks/useLoginModel";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
  const loginModal = useLoginModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);

      // add login

      loginModal.onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeHolder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disbaled={loading}
      />
      <Input
        placeHolder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disbaled={loading}
      />
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign In"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default LoginModal;
