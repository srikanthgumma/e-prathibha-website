import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import './Register.css';
import axios from 'axios';


function Register() {
  window.history.forward(false);

  // register function 
  let Registering = (e) => {
    e.preventDefault();
    console.log(e);
    let UserEmail = e.target[0].value;
    let UserName = e.target[1].value;
    let UserPhone = e.target[2].value;
    let UserPassword = e.target[3].value;
    let UserConfirmPassword = e.target[4].value;
    sessionStorage.setItem("UserEmail", UserEmail);
    sessionStorage.setItem("UserName", UserName);
    sessionStorage.setItem("UserPhone", UserPhone);
    sessionStorage.setItem("UserPassword", UserPassword);
    axios.post(`https://test.e-prathibha.com/apis/register`, {
      email: UserEmail,
      name: UserName,
      phone: UserPhone,
      password: UserPassword,
      confirmPassword: UserConfirmPassword
    }).then((val) => {
      console.log(val.data);
     if(val.data.status === 200) {
      alert(val.data.data);
          sessionStorage.setItem("SentVerifyCode", `${val.data.data.slice(-6)}`);
          window.location.href = '/verifyEmail';
     } else {
      alert(val.data.data);
     }
    }, (err) => {
      console.log(err);
    })
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = ""
    e.target[3].value = "";
    e.target[4].value = "";
  }
  // login function 
  let logging = (event) => {
    event.preventDefault();
    console.log(event);

    let LoginUserEmail = event.target[0].value;
    let LoginUserPassword = event.target[1].value;
    let login_data = {
      email: LoginUserEmail,
      password: LoginUserPassword
    }
    axios.post(`https://test.e-prathibha.com/apis/login`, login_data).then((val) => {
      console.log(val.data);
      if(val.data.status === 200) {
        alert(val.data.data.Message);
        window.location.href = '/startexam';
        sessionStorage.setItem('id', `${val.data.data.Id}`);
        sessionStorage.setItem('token', `${val.data.data.Token}`);
        sessionStorage.setItem("Auth", true)
      } else{
        alert(val.data?.data);
      }
    }, (err) => {
      console.log(err);
      alert(err.message);
    });
    event.target[0].value = "";
    event.target[1].value = "";
  }



  return (
    <div style={{ marginBottom: "1%", backgroundColor: "white", width: "700px", margin: "auto" }}>
      {/* register and login code  */}
      <div id='register' style={{ width: "100%", margin: "auto", padding: "30px", backgroundColor: "#00009", height: "auto", borderRadius: "20px", border: "6px solid black", marginTop: "7%" }}>
        <Tabs
          defaultActiveKey="home"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Login" id='login'>
            <Form onSubmit={logging} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id='email'>Email address *</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted" style={{ opacity: "0.6" }}>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label id='pass'>Password *</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" style={{ color: "blue" }} required />
              </Form.Group>
              <Form.Group>
                <Form.Control type='submit' value="LOGIN" style={{ backgroundColor: "black", color: "white", fontWeight: "bold", fontSize: "1.2rem" }} title='Login Now' />
              </Form.Group>
            </Form>

          </Tab>

          <Tab eventKey="profile" title="Register" >
            <Form onSubmit={Registering} id='register'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id='email1'>Email address *</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label id='name'>Name *</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicphonenumber">
                <Form.Label id='pass1'>Phone Number *</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Phone Number" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicpassword">
                <Form.Label id='pass1'>Password *</Form.Label>
                <Form.Control type="password" placeholder="Set Your Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label id='cpass'>Confirm Password *</Form.Label>
                <Form.Control type="password" placeholder="Confirm Your Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree to Terms & Conditons" style={{ color: "blue" }} required />
              </Form.Group>
              <Form.Group>
                <Form.Control type='submit' value="REGISTER" style={{ backgroundColor: "black", color: "white", fontWeight: "bold", fontSize: "1.2rem" }} title='Register Now' />
              </Form.Group>
            </Form>

          </Tab>
        </Tabs>
      </div>

    </div>
  );
}

export default Register;