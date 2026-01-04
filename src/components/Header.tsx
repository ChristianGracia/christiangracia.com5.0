import { FormControlLabel, Switch } from "@mui/material";
import { type FC } from "react";
import { NavLink } from "react-router";

type HeaderProps = {
  handleChangeTheme: (isDarkModeEnabled: boolean) => void;
  isDarkModeEnabled: boolean;
};

const Header: FC<HeaderProps> = ({ handleChangeTheme, isDarkModeEnabled }) => {
  console.log("in header, is checked? " + isDarkModeEnabled);
  return (
    <div className="flex flex-row justify-between">
      <NavLink to="/">Home</NavLink>
      <FormControlLabel
        control={<Switch />}
        checked={isDarkModeEnabled}
        label="Light / Dark"
        onChange={(_ev, val) => handleChangeTheme(val)}
      />
    </div>
  );
};

export default Header;
