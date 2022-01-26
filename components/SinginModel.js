import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSingModel } from '../feature/modelSlice';
import SignIn from './SignIn';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Login from './Login';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SigninModel = ({ provider }) => {
  const [value, setValue] = useState(0);
  const { model } = useSelector((state) => state.model);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Dialog
        open={model}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => dispatch(closeSingModel())}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* model content  */}
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Log In" />
          <Tab label="Sing Up" />
        </Tabs>

        {value === 0 && <Login />}
        {value === 1 && <SignIn />}
      </Dialog>
    </>
  );
};

export default SigninModel;
