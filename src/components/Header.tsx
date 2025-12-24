import { FormControlLabel, Switch } from "@mui/material";
import { type FC } from "react";

type HeaderProps = {
  handleChangeTheme: (isDarkModeEnabled: boolean) => void;
  isDarkModeEnabled: boolean;
};

const Header: FC<HeaderProps> = ({ handleChangeTheme, isDarkModeEnabled }) => {
  console.log("in header, is checked? " + isDarkModeEnabled);
  return (
    <>
      <FormControlLabel
        control={<Switch />}
        checked={isDarkModeEnabled}
        label="Light / Dark"
        onChange={(_ev, val) => handleChangeTheme(val)}
      />
    </>
  );
};

export default Header;
