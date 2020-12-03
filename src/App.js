import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import Drop from "./Drop";
import { Document, Page, pdfjs } from "react-pdf";
import { AnnotationFactory } from "annotpdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export async function fileToBlob(file, handleUpdate) {
  const { content, size } = file;
  let chunks = [];
  let i = 0;
  const totalCount = Math.round(size / 250000);

  for await (const chunk of content) {
    if (handleUpdate) {
      handleUpdate(i, totalCount);
    }
    chunks.push(chunk);
    i++;
  }
  // eslint-disable-next-line no-undef
  return new Blob(chunks);
}

function App() {
  const [pdf, setPdf] = useState(null);
  const [pageDetails, setPageDetails] = useState(null);
  const documentRef = useRef(null);

  useEffect(() => {
    if (pdf) {
    }
  }, [pdf]);

  return (
    <div className="App">
      <Drop
        onLoaded={async (files) => {
          console.log("fi", files);
          const reader = new FileReader();
          reader.readAsDataURL(files[0]);
          reader.onloadend = function () {
            const base64data = reader.result;
            console.log("base", base64data);
            setPdf(base64data);
          };
        }}
      />
      <div
        ref={documentRef}
        style={{ width: 800 }}
        onClick={(e) => {
          const { originalHeight, originalWidth } = pageDetails;

          const y =
            documentRef.current.clientHeight -
            (e.pageY - documentRef.current.offsetTop);
          const x = e.pageX - documentRef.current.offsetLeft;

          const newY = (y * originalHeight) / documentRef.current.clientHeight;
          const newX = (x * originalWidth) / documentRef.current.clientWidth;
          // y / documentRef.current.clientHeight = x / originalHeight

          AnnotationFactory.loadFile(pdf).then((factory) => {
            factory.createCircleAnnotation(
              0,
              [newX - 25, newY - 25, newX + 25, newY + 25],
              null,
              null,
              { r: 0, g: 0, b: 0 }
            );
            factory.download();
          });

          console.log("co", x, y);
        }}
      >
        <Document file={pdf}>
          <Page
            pageNumber={1}
            width={800}
            height={1200}
            onLoadSuccess={(data) => {
              console.log("loaded", data);
              setPageDetails(data);
            }}
          />
        </Document>
      </div>
    </div>
  );
}

export default App;
