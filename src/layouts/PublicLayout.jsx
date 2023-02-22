import { Box } from "@mui/material"


export const PublicLayout = ({children}) => {
  return (
    <Box sx={{
      display: "flex",
      height: "100vh",
      width: "100%",
    }}>
      {children}
    </Box>
  )
}
