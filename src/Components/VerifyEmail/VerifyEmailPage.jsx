import Form from 'react-bootstrap/Form';
import './VerifyEmail.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from "react-icons/cg";


let VerifyEmailPage = () => {


  let verify = (event) => {
    event.preventDefault();
    console.log(event);
    let VerfiyEmailCode = event.target[0].value;
    let GetVerifyEmailCode = sessionStorage.getItem('SentVerifyCode');

    if (VerfiyEmailCode === GetVerifyEmailCode) {
      alert('E-mail verify successful. Please Login to start the exam');
      window.location.href = '/register'
    } else {
      alert("you have entered wrong verify code. please try again");
    }

    event.target[0].value = "";
  }

  return (
    <div>
      <div   >
      

        <div id='container'>
          <Form style={{ textAlign: "center" }} onSubmit={verify}>
            <Form.Label style={{ fontWeight: "bold", fontSize: "1.4rem" }}>Verify Your Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter the code sent to your email" style={{ height: "45px", marginBottom: "10px" }} required />
            <Form.Control type='submit' value="Verify" style={{ width: "100px", margin: "auto", backgroundColor: "black", color: "white", fontWeight: "bold" }} title='Verify your Email' />
            <a href='/po' style={{ textDecoration: "none", marginLeft: "170px", position: "absolute", bottom: "0", marginBottom: "30px", fontWeight: "bold" }} title='Send the verification code again' >Resend Code</a>
          </Form>

        </div>

      </div>

    </div>
  )
}
export default VerifyEmailPage;