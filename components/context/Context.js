import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Context = createContext();
export const useCastomHook = () => useContext(Context);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    message: '',
    type: '',
  });
  const [clanderAnchorEl, setClanderAnchorEl] = useState(null);
  const [guestAnchorEl, setGuestAnchorEl] = useState(null);
  const [signInAnchorEl, setSignInAnchorEl] = useState(null);
  const [totalGuest, setTotalGuest] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const clanderOpen = (e) => {
    setClanderAnchorEl(e.currentTarget);
  };
  const clanderClose = () => {
    setClanderAnchorEl(null);
  };

  // guest menu open function

  const guestOpen = (e) => {
    setGuestAnchorEl(e.currentTarget);
  };
  const guestClose = () => {
    setGuestAnchorEl(null);
  };

  // login logout menu open function

  const signInOpen = (e) => {
    setSignInAnchorEl(e.currentTarget);
  };
  const signInClose = () => {
    setSignInAnchorEl(null);
  };
  

  // auth function

  useEffect(
    () =>
      onAuthStateChanged(auth, (res) => {
        res ? setUser(res) : setUser(null);
      }),
    []
  );

  const logout = () => {
    signOut(auth);
    setOpenAlert({
      open: true,
      type: 'success',
      message: 'Log out sucessfull',
    });
  };

  const value = {
    logout,
    user,
    openAlert,
    setOpenAlert,
    clanderAnchorEl,
    clanderOpen,
    clanderClose,
    guestAnchorEl,
    guestClose,
    guestOpen,
    signInAnchorEl,
    signInOpen,
    signInClose,
    totalGuest,
    setTotalGuest,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
