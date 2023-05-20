import { Stack, Paper } from "@mui/material";

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Paper>Item 1</Paper>
      <Paper>Item 2</Paper>
      <Paper>Long content</Paper>
    </Stack>
  )
}

export default Header;