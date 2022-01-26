import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ImGoogle } from "react-icons/im";
import { useDispatch } from "react-redux";
import { closeSingModel } from "../feature/modelSlice";
import { auth } from "../firebase";
import { useCastomHook } from "./context/Context";
const GoogleLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const { setOpenAlert } = useCastomHook();
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      setOpenAlert({
        open: true,
        type: "success",
        message: `Sign up successfull ${res.user.email}`,
      });
      dispatch(closeSingModel());
    } catch (error) {
      setOpenAlert({
        open: true,
        type: "error",
        message: error.message,
      });
    }
  };
  return (
    <>
      <div className="my-2">
        <p className="text-center">OR</p>
      </div>
      <div
        onClick={signInWithGoogle}
        className="border-2 mb-6 flex items-center h-12 pl-3 hover:border-black cursor-pointer"
      >
        <ImGoogle style={{ fontSize: 25 }} />
        <h2 className="text-center w-full">Continue with google </h2>
      </div>
    </>
  );
};

export default GoogleLogin;
