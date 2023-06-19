import Layout from "../components/Layout";
import LoginModal from "../components/modals/LoginModal";
import RegisterModel from "../components/modals/RegisterModel";
// import Modal from "../components/Modal";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import EditModal from "../components/modals/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      {/* <Modal actionLabel="Submit" isOpen title="Test" /> */}
      <LoginModal />
      <EditModal />
      <RegisterModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
