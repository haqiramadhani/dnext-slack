import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import {
  HeaderAvatar,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from "./HeaderElements";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Header() {
  const [user] = useAuthState(auth);

  // alert(JSON.stringify(user));

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          alt={user?.displayName}
          src={user?.photoURL}
          onClick={() => auth.signOut()}
        />
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <input type="text" placeholder="Search" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
