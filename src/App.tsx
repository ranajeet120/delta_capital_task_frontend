import { useState } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";

export default function App() {
  const [file, setFile] = useState<Blob | null>(null);
  const [signedPdf, setSignedPdf] = useState<string | null>(null);

  const uploadPdf = async () => {
    const formData = new FormData();
    formData.append("pdf", file as Blob);

    const res = await axios.post("http://localhost:5001/sign", formData, {
      responseType: "blob",
    });

    const blob = new Blob([res.data], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    setSignedPdf(url);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6">Upload PDF for Signing</Typography>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              setFile(selectedFile);
            }
          }}
          style={{ marginTop: 20 }}
        />

        <Box mt={2}>
          <Button
            variant="contained"
            fullWidth
            disabled={!file}
            onClick={uploadPdf}
          >
            Upload & Sign
          </Button>
        </Box>

        {signedPdf && (
          <iframe
            src={signedPdf}
            width="100%"
            height="600px"
            title="Signed PDF"
          />
        )}
      </Box>
    </Container>
  );
}
