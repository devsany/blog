import { useEffect, useState } from "react";
import LoginNavBar from "../../LoginNavBar/LoginNavBar";

const LifestyleLogin = () => {
  const data = async () => {
    const res = await fetch("https://catogery.wiremockapi.cloud/");
    const res1 = await res.json();
    console.log(res1);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      {" "}
      <LoginNavBar />
      <div className="main">
        <form action="https://catogery.wiremockapi.cloud/" method="post">
          topic: <input type="text" />
          Description : <input type="text" />
          <button>click</button>
        </form>
      </div>
    </div>
  );
};

export default LifestyleLogin;
