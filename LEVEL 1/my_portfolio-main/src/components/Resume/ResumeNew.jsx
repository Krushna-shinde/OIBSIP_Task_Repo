import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineDownload } from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { pdfjs } from "react-pdf";
import Particle from "../Particle";
import pdf from "../../Assets/Krushna_Shinde_Resume.pdf"
import KrushnaShinde from "../../Assets/Krushna_Shinde_Resume.jpg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img src={KrushnaShinde} alt="Krushna Shinde" className="img-fluid w-75"></img>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* <h1>This Page is not avilable currently....This is under construction</h1> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
