import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModel from "@/components/modals/RegisterModel";
// import Modal from "@/components/Modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal actionLabel="Submit" isOpen title="Test" /> */}
      <LoginModal />
      <RegisterModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
