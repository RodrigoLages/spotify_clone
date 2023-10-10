import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../img/logo.svg";

function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async (e) => {
    const user = mockData.find((element) => element.user === email);
    if (user && user.pass === pass) {
      navigate("/home");
    } else {
      alert("User invalid");
    }
  };

  const mockData = [
    {
      user: "bigas@email.com",
      pass: "1234",
    },
  ];

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.LeftSide}>
          <div className={styles.LogoContainer}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={styles.RightSide}>
          <div>
            <h1 className={styles.Title}>HarmonyHue</h1>
            <form className={styles.Form} onSubmit={handleLogin}>
              <input
                className={styles.TextBox}
                type="text"
                name="email"
                placeholder="E-mail"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className={styles.TextBox}
                type="password"
                name="pass"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <input className={styles.Button} type="submit" value="Get In" />
            </form>
            <div className={styles.LinkField}>
              <Link to={"/"} className={styles.Link}>
                Forgot your password?
              </Link>
              <Link to={"/register"} className={styles.Link}>
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
