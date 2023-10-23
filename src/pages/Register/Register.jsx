import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../img/logo.svg";
import profile from "../../img/addPhoto.svg";

import api from "../../services/api";

function App() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState();
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (pass !== confPass) return alert("Passwords do not match");

    const body = {
      username,
      email,
      pass,
      birth,
    };

    api
      .post("/auth/register", body)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    navigate("/");
  };

  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <div className={styles.HeaderTitle}>
          <img className={styles.HeaderLogo} src={logo} alt="" />
          <div className={styles.HeaderName}>HarmonyHue</div>
        </div>
        <div className={styles.HeaderButton}>
          <div className={styles.HeaderText}>Are you a member?</div>
          <button className={styles.HeaderLogin} onClick={() => navigate("/")}>
            Get In
          </button>
        </div>
      </div>
      <div className={styles.Main}>
        <form className={styles.Form} onSubmit={handleRegister}>
          <div className={styles.FormField}>
            <label htmlFor="username">Username</label>
            <input
              className={styles.FormInput}
              type="text"
              id="username"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className={styles.FormField}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.FormInput}
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className={styles.FormField}>
            <label htmlFor="dob">Date of Birth</label>
            <input
              className={styles.FormInput}
              type="date"
              id="dob"
              name="dob"
              onChange={(e) => {
                setBirth(e.target.value);
              }}
              required
            />
          </div>
          <div className={styles.FormField}>
            <label htmlFor="password">Password</label>
            <input
              className={styles.FormInput}
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              required
            />
          </div>
          <div className={styles.FormField}>
            <label htmlFor="passwordConf">Confirm Password</label>
            <input
              className={styles.FormInput}
              type="password"
              id="passwordConf"
              name="passwordConf"
              onChange={(e) => {
                setConfPass(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <button className={styles.FormButton} type="submit">
              Register
            </button>
          </div>
        </form>
        <div>
          <img className={styles.Profile} src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
