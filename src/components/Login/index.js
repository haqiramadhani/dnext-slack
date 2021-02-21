import { LoginContainer, LoginInnerContainer } from "./LoginElements";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

function Login() {
  const handleLogin = () => {
    auth.signInWithPopup(provider).catch((e) => alert(e.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="http://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign In to the Slaku</h1>
        <p>slaku.netlify.app</p>

        <Button onClick={handleLogin}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
