import { Link } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../img/logo.svg";

function App() {
  const handleLogin = async (e) => {
    alert("Login");
  };

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
              <input className={styles.TextBox} type="text" name="email" placeholder="E-mail" required />
              <input className={styles.TextBox} type="password" name="pass" placeholder="Password" required />
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
