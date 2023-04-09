import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModelStore from "@/hooks/useRegisterModel";
import useLoginModel from "@/hooks/useLoginModel";

const RegisterModel = () => {
  const loginModal = useLoginModel();

  const registerModel = useRegisterModelStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);

      // register and login

      registerModel.onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [registerModel]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeHolder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disbaled={loading}
      />
      <Input
        placeHolder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disbaled={loading}
      />
      <Input
        placeHolder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
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
      isOpen={registerModel.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default RegisterModel;
