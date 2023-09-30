import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../img/logo.svg";
import profile from "../../img/addPhoto.svg";

function App() {
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    navigate("/home");
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
              //value=""
              onChange={null}
              //required
            />
          </div>
          <div className={styles.FormField}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.FormInput}
              type="email"
              id="email"
              name="email"
              //value=""
              onChange={null}
              //required
            />
          </div>
          <div className={styles.FormField}>
            <label htmlFor="dob">Date of Birth</label>
            <input
              className={styles.FormInput}
              type="date"
              id="dob"
              name="dob"
              // value=""
              onChange={null}
              //required
            />
          </div>
          <div className={styles.FormField}>
            <label htmlFor="password">Password</label>
            <input
              className={styles.FormInput}
              type="password"
              id="password"
              name="password"
              //value=""
              onChange={null}
              //required
            />
          </div>
          <div className={styles.FormField}>
            <label htmlFor="passwordConf">Confirm Password</label>
            <input
              className={styles.FormInput}
              type="password"
              id="passwordConf"
              name="passwordConf"
              // value=""
              onChange={null}
              //required
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
