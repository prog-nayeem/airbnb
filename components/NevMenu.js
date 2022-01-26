import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useCastomHook } from './context/Context';
import { openSignModel } from '../feature/modelSlice';
import { useDispatch } from 'react-redux';
export default function NevMenu() {
  const dispatch = useDispatch();
  const { user, logout, signInAnchorEl, signInClose } = useCastomHook();
  
  const handleMenu = () => {
    signInClose();
    return dispatch(openSignModel());
  };
  return (
    <Menu
      anchorEl={signInAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      style={{
        top: 5,
      }}
      open={Boolean(signInAnchorEl)}
      onClose={signInClose}
      PaperProps={{
        style: {
          width: 270,
        },
      }}
    >
      {user ? (
        <MenuItem onClick={logout} className="w-full">
          Log Out
        </MenuItem>
      ) : (
        <>
          <MenuItem onClick={handleMenu} className="w-full">
            Sign Up
          </MenuItem>
        </>
      )}
      <hr className="my-2" />
      <MenuItem className="w-full">Host an experience </MenuItem>
      <MenuItem className="w-full">Help</MenuItem>
    </Menu>
  );
}
