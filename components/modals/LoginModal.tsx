import useLoginModel from "@/hooks/useLoginModel";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModelStore from "@/hooks/useRegisterModel";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  const loginModal = useLoginModel();
  const registerModal = useRegisterModelStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);

      await signIn("credentials", {
        email,
        password,
      });

      loginModal.onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [loginModal, email, password]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
        type="email"
        disabled={loading}
      />
      <Input
        disabled={loading}
        placeHolder="Password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={handleTogglePassword}
        className="text-sky-900 top-1/2 
        right-0  flex items-center justify-center focus:outline-none"
      >
        {showPassword ? (
          <AiOutlineEye size={30} />
        ) : (
          <AiOutlineEyeInvisible size={30} />
        )}
      </button>
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
