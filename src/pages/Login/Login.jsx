import { useNavigate, Link } from "react-router-dom";
import "./style.css";
import logo from "../../img/logo.svg";

function App() {
  const handleLogin = async (e) => {
    alert("Login");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Left-side">
          <div className="Logo-container">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="Right-side">
          <div className="Form">
            <h1>HarmonyHue</h1>
            <form onSubmit={handleLogin}>
              <input
                className="Text-box"
                type="text"
                name="email"
                placeholder="E-mail"
                required
              />
              <input
                className="Text-box"
                type="password"
                name="pass"
                placeholder="Password"
                required
              />
              <input className="Button" type="submit" value="Get In" />
            </form>
            <div className="Link-field">
              <Link to={"/"} className="Link">
                Forgot your password?
              </Link>
              <Link to={"/register"} className="Link">
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
