import { useState } from "react";
import LoginNavBar from "../../LoginNavBar/LoginNavBar";

const LifestyleLogin = () => {
  const [date, setDate] = useState("");

  return (
    <div>
      {" "}
      <LoginNavBar />
      <div className="main">
        <form action="https://catogery.wiremockapi.cloud/" method="post">
          topic: <input type="text" />
          Description : <input type="text" />
          <button >click</button>
        </form>
      </div>
    </div>
  );
};

export default LifestyleLogin;
