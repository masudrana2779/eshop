
import SignInFrom from "../../components/sign-in-form/sign-in-form.component";
import SignUpFrom from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>This is Sign In Page</h1>
      {/* <button onClick={logGoogleUser}> Sign in with Google Popup</button> */}
      <SignInFrom />
      <SignUpFrom />
    </>
  );
};

export default Authentication;
