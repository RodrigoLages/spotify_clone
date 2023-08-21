import { Link } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../img/logo.svg";

function App() {
  const handleRegister = async (e) => {
    alert("Register");
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
            <h1 className={styles.Title}>Register</h1>
            <form className={styles.Form} onSubmit={handleRegister}>
              <input className={styles.TextBox} type="text" name="email" placeholder="E-mail" required />
              <input className={styles.TextBox} type="password" name="pass" placeholder="Password" required />
              <input className={styles.TextBox} type="text" name="username" placeholder="Username" />
              <input className={styles.Button} type="submit" value="Sign Up" />
            </form>
            <div className={styles.LinkField}>
              <Link to={"/"} className={styles.Link}>
                Already have an account? Login
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
