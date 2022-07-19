
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>This is Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
    </>
  );
};

export default SignIn;
