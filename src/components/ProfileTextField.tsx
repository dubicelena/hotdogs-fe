import { MenuItem, SxProps, TextField, Theme } from "@mui/material";
// import driverLicenseStates from "./driverLicenseStates";

interface Props {
  text?: string;
  select?: boolean;
  type?: string;
  value?: string;
  maxLength?: number;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileTextField = ({
  text,
  select,
  type,
  value,
  maxLength,
  disabled,
  sx,
  onChange,
}: Props): JSX.Element => {
  return (
    <TextField
      fullWidth
      label={text}
      size="small"
      select={select}
      type={type}
      value={value}
      inputProps={{ maxLength: maxLength }}
      disabled={disabled}
      sx={{
        backgroundColor: "white",
        marginRight: "10px",
        marginTop: { xs: "15px", md: "0px" },
        ...sx,
      }}
      onChange={onChange}
    >
      {/* {driverLicenseStates.map((option) => (
        <MenuItem value={option.value}>{option.value}</MenuItem>
      ))} */}
    </TextField>
  );
};

export default ProfileTextField;
