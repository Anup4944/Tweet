import useLoginModel from "@/hooks/useLoginModel";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModelStore from "@/hooks/useRegisterModel";

const LoginModal = () => {
  const loginModal = useLoginModel();
  const registerModal = useRegisterModelStore();

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

  const onToggle = useCallback(() => {
    if (loading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [loading, registerModal, loginModal]);

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

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time here?
        <span
          className="text-white cursor-pointer hover:underline ml-1"
          onClick={onToggle}
        >
          Register
        </span>
      </p>
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
      footer={footerContent}
    />
  );
};

export default LoginModal;
