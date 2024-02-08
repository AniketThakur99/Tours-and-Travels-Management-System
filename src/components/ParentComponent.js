import React, { useState } from "react";
import LoginForm from "./LoginForm";

const ParentComponent = () => {
  const [loginUser, setLoginUser] = useState(null);

  return (
    <div>
      <h1>Welcome</h1>
      <LoginForm setLoginUser={setLoginUser} />
    </div>
  );
};

export default ParentComponent;
