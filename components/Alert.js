import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useCastomHook } from './context/Context';

const Alert = () => {
  const { openAlert, setOpenAlert } = useCastomHook();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert({ open: false });
  };
  return (
    <>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          open={openAlert.open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <MuiAlert
            onClose={handleClose}
            variant="filled"
            severity={openAlert.type}
            sx={{ width: '100%' }}
          >
            {openAlert.message}
          </MuiAlert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default Alert;
