import "./App.css";
import { useEffect, useRef, useState } from "react";
import Drop from "./Drop";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { blobToURL } from "./Utils";
import SignatureCanvas from "react-signature-canvas";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const styles ={
    sigBlock: {
      display: 'inline-block',
      border: '1px solid #000'
    }
  }
  const [pdf, setPdf] = useState(null);
  const [pageDetails, setPageDetails] = useState(null);
  const documentRef = useRef(null);
  const sigRef = useRef(null);

  useEffect(() => {
    if (pdf) {
    }
  }, [pdf]);

  return (
    <div className="App">
      <div style={styles.sigBlock}>
        <SignatureCanvas
          velocityFilterWeight={1}
          ref={sigRef}
          canvasProps={{ width: '600', height: 200, className: "sigCanvas" }}
        />
      </div>
      <Drop
        onLoaded={async (files) => {
          const URL = await blobToURL(files[0]);
          setPdf(URL);
        }}
      />
      <div
        ref={documentRef}
        style={{ width: 800 }}
        onClick={async (e) => {
          const { originalHeight, originalWidth } = pageDetails;

          const y =
            documentRef.current.clientHeight -
            (e.pageY - documentRef.current.offsetTop);
          const x = e.pageX - documentRef.current.offsetLeft;

          const newY = (y * originalHeight) / documentRef.current.clientHeight;
          const newX = (x * originalWidth) / documentRef.current.clientWidth;

          const pdfDoc = await PDFDocument.load(pdf);

          const pages = pdfDoc.getPages();

          const firstPage = pages[0];

          const sigURL = sigRef.current.toDataURL();

          const pngImageBytes = await fetch(sigURL).then((res) => res.arrayBuffer())
          const pngImage = await pdfDoc.embedPng(pngImageBytes)
          const pngDims = pngImage.scale(0.5)

          firstPage.drawImage(pngImage, {
            x: newX,
            y: newY,
            width: pngDims.width,
            height: pngDims.height,
          })

          const pdfBytes = await pdfDoc.save();
          const blob = new Blob([new Uint8Array(pdfBytes)]);

          const URL = await blobToURL(blob);
          setPdf(URL);
        }}
      >
        <Document file={pdf}>
          <Page
            pageNumber={1}
            width={800}
            height={1200}
            onLoadSuccess={(data) => {
              setPageDetails(data);
            }}
          />
        </Document>
      </div>
    </div>
  );
}

export default App;
