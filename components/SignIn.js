import { useState } from 'react';
import { useCastomHook } from './context/Context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { closeSingModel } from '../feature/modelSlice';
import GoogleLogin from './GoogleLogin';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setOpenAlert } = useCastomHook();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setOpenAlert({
        open: true,
        type: 'error',
        message: 'Password do not match',
      });
      return;
    } else if (!password || !email) {
      setOpenAlert({
        open: true,
        type: 'error',
        message: 'Please fill all input',
      });
      return;
    } else if (email && password) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        setOpenAlert({
          open: true,
          type: 'success',
          message: `Sign up sucessfull. Wellcome ${res.user.email}`,
        });
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        dispatch(closeSingModel());
      } catch (error) {
        setOpenAlert({
          open: true,
          type: 'error',
          message: error.message,
        });
      }
      return;
    }
  };
  return (
    <>
      <div className="px-4">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mt-6">Welcome to Airbnb</h1>
          <div className="flex-col flex w-full mt-3">
            <input
              placeholder="Inter email"
              className="outline-none py-3 text-lg pl-3 rounded-t-xl border-2 border-gray-100"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Inter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="outline-none py-3 border-t-0 pl-3 text-lg border-2 border-gray-100"
            />
            <input
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="outline-none py-3 rounded-b-xl border-t-0 pl-3 text-lg border-2 border-gray-100"
            />
          </div>
          <p className="text-sm mt-3 text-opacity-50">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. Privacy Policy
          </p>
          <button
            type="submit"
            className="bg-red-600 font-semibold text-lg mt-2 hover:bg-red-500 w-full text-white py-3"
          >
            Continue
          </button>
        </form>

        {/* others login method */}
        <GoogleLogin />
      </div>
    </>
  );
};

export default SignIn;
