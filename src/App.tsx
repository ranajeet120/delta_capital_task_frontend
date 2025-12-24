import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";
import file_img from "./assets/file_img.png";
import project_icon from "./assets/project_icon.png";
import useStyles from "./AppStyles";

const App = () => {
  const [file, setFile] = useState<Blob | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [signedPdf, setSignedPdf] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement | null>(null);
  const classes = useStyles();

  const uploadPdf = async () => {
    try {
      const formData = new FormData();
      formData.append("pdf", file as Blob);

      const res = await axios.post(
        "https://delta-capital-task-backend.onrender.com/sign",
        formData,
        {
          responseType: "blob",
        }
      );
      console.log("res", res);

      if (res.status === 200 || res.status === 201) {
        const blob = new Blob([res.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setSignedPdf(url);
        alert("Signed PDF generated successfully.\n Scroll down for preview.");
      } else {
        alert("Something went wrong!!");
      }
    } catch (err) {
      console.log("err", err);
      alert("Something went wrong!!");
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.headerContainer}>
        <span className={classes.headerText}>
          Sample Project By Roni Biswas
        </span>
        <img src={project_icon} className={classes.headerIconStyle} />
      </div>

      <div className={classes.bodyContainer}>
        <span className={classes.headingText}>Upload PDF for Sign</span>

        {fileUrl ? (
          <PdfViewer pdfUrl={fileUrl} title="Selected PDF" />
        ) : (
          <div className={classes.buttonContainer}>
            <img src={file_img} className={classes.fileIconStyle} />
            <input
              type="button"
              onClick={() => ref.current?.click()}
              value="Upload From Device"
              className={classes.buttonStyle}
              style={{ marginTop: "5%" }}
            />
          </div>
        )}

        <input
          ref={ref}
          hidden
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              setFile(selectedFile);
              setFileUrl(URL.createObjectURL(selectedFile));
            }
          }}
          multiple={false}
        />
        <input
          type="button"
          onClick={uploadPdf}
          value="Generate Sign PDF"
          className={classes.buttonStyle}
        />

        {signedPdf && <PdfViewer pdfUrl={signedPdf} title="Signed PDF" />}
      </div>
    </div>
  );
};

export default App;

// const PdfViewer = ({
//   pdfUrl,
//   title,
// }: {
//   pdfUrl: string | undefined;
//   title: string;
// }) => {
//   const classes = useStyles();
//   return (
//     <div className={classes.pdfContainer}>
//       <iframe src={pdfUrl} width="100%" height="100%" title={title} />;
//     </div>
//   );
// };

const PdfViewer = ({
  pdfUrl,
  title,
}: {
  pdfUrl: string | undefined;
  title: string;
}) => {
  const classes = useStyles();

  const isMobile = /Android|iPhone|iPad|iPod/i.test(
    navigator.userAgent
  );

  if (!pdfUrl) return null;

  if (isMobile) {
    return (
      <div className={classes.pdfContainer}>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.buttonStyle}
        >
          Open PDF
        </a>
      </div>
    );
  }

  return (
    <div className={classes.pdfContainer}>
      <iframe
        src={pdfUrl}
        width="100%"
        height="100%"
        title={title}
      />
    </div>
  );
};

