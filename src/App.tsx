import Typography from "@mui/material/Typography";
import S3Upload from "./pages/S3Upload";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mx: "100px",
        gap: "50px",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      >
        <Typography variant="h2">S3 Bucket Upload</Typography>
        <S3Upload />
      </Box>
    </Box>
  );
}

export default App;
