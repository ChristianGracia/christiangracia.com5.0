import { FormControlLabel, Switch } from "@mui/material";
import { type FC } from "react";

type HeaderProps = {
  handleChangeTheme: (isDarkModeEnabled: boolean) => void;
};

const Header: FC<HeaderProps> = ({ handleChangeTheme }) => {
  return (
    <>
      <FormControlLabel
        control={<Switch />}
        label="Light / Dark"
        onChange={(_ev, val) => handleChangeTheme(val)}
      />
    </>
  );
};

export default Header;
