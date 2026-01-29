import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";

function S3Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [items, setItems] = useState([]);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file, file.name);
    console.log(file);
    axios.post("http://localhost:3000/upload", formData);
  };

  const fileData = () => {
    if (file) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {file.name}</p>
          <p>File Type: {file.type}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  useEffect(() => {
    async function getFiles() {
      try {
        const res = await axios.get("http://localhost:3000/files");
        setItems(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getFiles();
  }, []);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          border: "2px dashed #1976d2",
          borderRadius: 2,
          p: 4,
          width: 400,
          mx: "auto",
          mt: 10,
        }}
      >
        <UploadFileIcon sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Drag & Drop or Click to Upload
        </Typography>
        <input type="file" id="file-upload" onChange={onFileChange} />
        <Button variant="contained" component="span" onClick={onFileUpload}>
          Upload
        </Button>
        {fileData()}
      </Box>
      <Box>
        <p>{items.map((i) => i)}</p>
      </Box>
    </>
  );
}

export default S3Upload;
