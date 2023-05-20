import { Button, Grid, Stack} from "@mui/material/";
import { useState } from "react";
import "./style.css";

const Square = () => {
  const [marked, setMarked] = useState("");
  return (
    <Button 
      className={"square"}
      disableRipple={true}
      variant={"contained"}
      onClick={() => {if (!marked) setMarked("X")}}
      children={`${marked}`}
    ></Button>
  )
}

export const Board = () => {
  const initialBoard = Array(9).fill("");
  const [boardSpace, setBoardSpace] = useState(initialBoard)

  return (
    <Stack
      direction={"row"}
      justifyContent={"flex-start"}
      spacing={0}
      alignItems={"flex-start"}
    >
      <Grid container 
        spacing={0}
      >
        {boardSpace.map((a, index) => {
          if (index === 3 || index === 6) {
            return (
              <>
            <Grid item xs={9} sx={{width: "fit-content"}}>
              
            </Grid>
            <Grid item xs={1} sx={{width: "fit-content"}}>
              <Square/>
            </Grid>
            </>
            )
          }
          return (
            
            <Grid item xs={1} sx={{width: "fit-content"}}>
              <Square/>
            </Grid>
          )
        })}
      </Grid>
    </Stack>
  )
}