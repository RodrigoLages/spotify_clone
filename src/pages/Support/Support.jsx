import styles from "./style.module.css";
import faq from "../../img/Faq.png";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.Main}>
          <div className={styles.OnlineSupport}>
            <div className={styles.TextArea}>
              <h2 className={styles.Title}>Online</h2>
              <h2 className={styles.Title} style={{ color: "#CF769E" }}>
                Support
              </h2>
              <p className={styles.Text}>
                We need some information to offer you the best solution. Get in touch via phone, chat, email
                and more.
              </p>
            </div>
            <button className={styles.Button}>Learn More</button>
          </div>
          <img src={faq} alt="" />
        </div>
        <div className={styles.QuickHelp}>
          <h3>Quick Help</h3>
          <div className={styles.Line}></div>
          <p className={styles.Link}>Can't reset password</p>
          <p className={styles.Link}>I don't remember my login information</p>
          <p className={styles.Link}>Help with logging in with Facebook</p>
          <p className={styles.Link}>Payment methods</p>
          <p className={styles.Link}>Price updates</p>
          <p className={styles.Link}>Data rights and privacy settings</p>
        </div>
      </header>
    </div>
  );
}

export default App;
