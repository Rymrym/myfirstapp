
import './App.css';
import {  Button, Form, FormGroup, Input} from "reactstrap";
import {  FacebookLoginButton} from 'react-social-login-buttons';

function App() {
  return (
<div>
    <div  className="container-fluid"></div>
    <div className="container cont"><Form className="login-form">
    <h1>MyWebSite.com</h1>
    <h2 className="text-center">LOGIN</h2>
    <FormGroup>
      <label>
        Email
        </label><br/>
      <Input type="email" placeholder="Email"/>
    </FormGroup>
    <FormGroup>
      <label>
        Password

      </label><br/>
      <Input type="password" placeholder="Password"/>
    </FormGroup>
    <Button className="btn-lg btn-dark btn-block">Login</Button>
    <div className="text-center pt-3">Login with Facebook</div>
    <FacebookLoginButton></FacebookLoginButton>
    <div className="text-center">
      <a href="/Sign-up">Sign up</a>
      <span className="p-2">|</span>
      <a href="/Forgot-password">Forgot Password?</a>
    </div>
  </Form>  
  </div>
  </div>


  );
}

export default App;
