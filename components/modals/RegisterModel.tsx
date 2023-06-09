import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModelStore from "../../hooks/useRegisterModel";
import useLoginModel from "../../hooks/useLoginModel";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

const RegisterModel = () => {
  const loginModal = useLoginModel();

  const registerModel = useRegisterModelStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);

      await axios.post("/api/register", { email, username, name, password });

      setLoading(false);

      toast.success("Account created");

      signIn("credentials", {
        email,
        password,
      });

      registerModel.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [registerModel, email, password, username, name]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onToggle = useCallback(() => {
    if (loading) {
      return;
    }

    registerModel.onClose();
    loginModal.onOpen();
  }, [loading, registerModel, loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeHolder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={loading}
      />
      <Input
        placeHolder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={loading}
      />
      <Input
        placeHolder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={loading}
      />
      <Input
        placeHolder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={loading}
        type="password"
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
        Already have an account?
        <span
          className="text-white cursor-pointer hover:underline ml-1"
          onClick={onToggle}
        >
          Sign In
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={registerModel.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModel;
