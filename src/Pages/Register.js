import { Button, Divider, Form, Header, Segment } from "semantic-ui-react";
import "../App.js";

function Register(props) {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center" }}>
      <Segment size="medium" style={{ width: "30vw" }} raised>
        <Header>Register</Header>
        <Form>

          <Form.Field>
            <label>Name</label>
            <input placeholder="Your name" type="email"></input>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email address" type="email"></input>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" type="password"></input>
          </Form.Field>
          <Button fluid primary>
            Register
          </Button>
        </Form>
        <Divider horizontal>OR</Divider>
        <Button secondary fluid onClick={() => props.onLoginClick()}>
          Login here
        </Button>
      </Segment>
    </div>
  );
}

export default Register;
