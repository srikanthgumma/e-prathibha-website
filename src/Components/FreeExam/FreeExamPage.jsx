import Card from 'react-bootstrap/Card';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './FreeExamPage.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


let StartExamPage = () => {
  // window.history.back(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ backgroundColor: "white" }}>
      <nav style={{ textAlign: "center", backgroundColor: "black", height: "90px", paddingTop: "20px" }}>
        <h1 style={{ display: "inline-block", width: "300px", backgroundColor: "transparent", color: "white", float: "left" }}>E-Prathibha</h1>
        <Link to="/" id="slink">
          Home
        </Link>
      </nav>

      <div id='cardcontainer' style={{ display: "grid", gridTemplateColumns: "5% 90%", justifyContent: "left" }}>
        <ul>
          <li><a class="active" href="#home" title='Profile'><FaInstagram /></a></li>
          <li><a href="#news" title='Profile'><FaGithub /></a></li>
          <li><a href="#contact" title='Profile'><FaLinkedinIn /></a></li>
          <li><a href="#about" title='Profile'>< FaFacebook /></a></li>
          <li><a class="active" href="#home" title='Profile'><FaInstagram /></a></li>
          <li><a href="#news" title='Profile'><FaGithub /></a></li>
          <li><a href="#contact" title='Profile'><FaLinkedinIn /></a></li>
          <li><a href="#about" title='Profile'>< FaFacebook /></a></li>
          <li><a class="active" href="#home" title='Profile'><FaInstagram /></a></li>
        </ul>
        <div id='card1'>
          <Card >
            <Card.Body >
              <Card.Title style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "50px" }}>Explore Exams for Free</Card.Title>
              <Card.Text>
                Get your question papers evaluated and see where you stand in the competition for cracking UPSC examination this year<br />
                A.3 Years olds Quesion Paper Civil services <br />
                B.Limited UPSC old question papers <br />
                C.Limited question from basicc of school NCERT (6th to 10th Class )
              </Card.Text>
              <button variant="primary" onClick={handleShow} id='fbutton' style={{ marginTop: "50px" }} title='Start your Exam Now'>
                Start Now
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton  >
                  <Modal.Title>Free Previous Papers Practice </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Get your question papers evaluated and see where you stand in the competition for cracking UPSC examination this year<br />
                  A.3 Years olds Quesion Paper Civil services <br />
                  B.Limited UPSC old question papers <br />
                  C.Limited question from basicc of school NCERT (6th to 10th Class)</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <a variant="primary" href='/examlists' id='fbutton' title='Let"s Start'>
                    Start Exam Now
                  </a>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default StartExamPage;