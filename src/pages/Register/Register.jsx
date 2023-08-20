import { useNavigate, Link } from "react-router-dom";
import "./style.css";
import logo from "../../img/logo.svg";

function App() {
  const handleRegister = async (e) => {
    alert("Register");
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
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
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
              <input
                className="Text-box"
                type="text"
                name="username"
                placeholder="Username"
              />
              <input className="Button" type="submit" value="Sign Up" />
            </form>
            <div className="Link-field">
              <Link to={"/"} className="Link">
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
