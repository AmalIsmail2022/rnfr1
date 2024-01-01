import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import Flash from "react-reveal/Flash";

const Landing = () => {
  const [user, setUser] = useState("");
  const [admin, setAdmin] = useState("");

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  useEffect(() => {
    if (localStorage.getItem("admin") != null)
      setUser(JSON.parse(localStorage.getItem("admin")));
  }, []);

  return (
    <div>
      <Link to={"/home"}>
        <div className="landing">
          <Zoom>
            <h1>
              <Flash duration={2000} delay={300}>
                <span>EMPLOYEES</span>
              </Flash>
              <Flash duration={2000} delay={600}>
                <span> CRUD</span>
              </Flash>
              <Flash duration={2000} delay={900}>
                <span> SYSTEM</span>
              </Flash>
            </h1>
          </Zoom>
        </div>
      </Link>
    </div>
  );
};

export default Landing;
