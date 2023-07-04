import Facebook from "../img/facebook.png";
import Github from "../img/github.png";

const GOOGLE_CLIENT_ID =
    "561326950243-dm3ee9l77codsuq9c5g4ulaq78q01pdc.apps.googleusercontent.com";

const Login = () => {

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div id="g_id_onload"
               data-client_id={GOOGLE_CLIENT_ID}
               data-login_uri="http://localhost:5000/auth/google"
               data-auto_prompt="true">
          </div>
          <div className="g_id_signin"
               data-type="standard"
               data-size="large"
               data-theme="outline"
               data-text="sign_in_with"
               data-shape="rectangular"
               data-logo_alignment="left">
          </div>

          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
