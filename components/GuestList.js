import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useCastomHook } from "./context/Context";

const GuestList = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  const num11 = Number(num1);
  const num22 = Number(num2);
  const num33 = Number(num3);

  const { guestAnchorEl, guestClose, setTotalGuest } = useCastomHook();

  useEffect(
    () => setTotalGuest(num11 + num22 + num33),
    [num11, num22, num33, setTotalGuest]
  );

  return (
    <>
      <Menu
        anchorEl={guestAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{
          top: 20,
        }}
        open={Boolean(guestAnchorEl)}
        onClose={guestClose}
        PaperProps={{
          style: {
            width: 270,
          },
        }}
      >
        <MenuItem className="flex w-full !justify-between items-center">
          <div>
            <h2 className="font-semibold">Adults</h2>
            <p className="text-sm">Ages 12 or above</p>
          </div>
          <div className="">
            <input
              type="number"
              min="0"
              placeholder="0"
              className="w-8 outline-none"
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>
        </MenuItem>
        <MenuItem className="flex w-full !justify-between items-center">
          <div>
            <h2 className="font-semibold">Children</h2>
            <p className="text-sm">Ages 2-12</p>
          </div>
          <div>
            <input
              type="number"
              min="0"
              placeholder="0"
              className="w-8 outline-none"
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>
        </MenuItem>
        <MenuItem className="flex w-full !justify-between items-center">
          <div>
            <h2 className="font-semibold">Infants</h2>
            <p className="text-sm">Under 2</p>
          </div>
          <div>
            <input
              type="number"
              min="0"
              placeholder="0"
              className="w-8 outline-none"
              onChange={(e) => setNum3(e.target.value)}
            />
          </div>
        </MenuItem>
      </Menu>
    </>
  );
};

export default GuestList;
