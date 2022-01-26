import { Menu } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { useCastomHook } from './context/Context';

const ClanderMenu = () => {
  const {
    clanderAnchorEl,
    clanderClose,
    setStartDate,
    setEndDate,
    startDate,
    endDate,
  } = useCastomHook();
  
  const selectinOnRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const handelChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <>
      <Menu
        anchorEl={clanderAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        style={{ top: 10 }}
        open={Boolean(clanderAnchorEl)}
        onClose={clanderClose}
      >
        <DateRangePicker
          ranges={[selectinOnRange]}
          onChange={handelChange}
          minDate={new Date()}
          rangeColors={['#FD5B61']}
        />
      </Menu>
    </>
  );
};

export default ClanderMenu;
