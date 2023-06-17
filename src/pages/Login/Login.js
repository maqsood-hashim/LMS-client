import Styles from "./login.module.css";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Alert_Comp from "../../components/Alert/Alert_Comp";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import Toast_Comp from "../../components/Toast/Toast_Comp";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clip1 from "../../assets/videos/avaition.mp4"
import clip2 from "../../assets/videos/pexels-axelmark-4791433-1920x1080-30fps.mp4"
import clip3 from "../../assets/videos/pexels-hampie-15558109-1920x1080-30fps.mp4"
import clip4 from "../../assets/videos/pexels-pixabay-854271-1280x720-30fps.mp4"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [statusError, statusSetError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const history = useHistory();
  const {user} = useSelector((state) => state.auth);
  //console.log(user);

  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://kind-blue-coral-hose.cyclic.app/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        // console.log(result);
        if (result.errors) {
          setError(result.errors);
        } else {
          console.log(result.userInfo )
          if(result.userInfo.status != "1"  && result.userInfo.role != "Admin" )
          {
            console.log(result.userInfo.status  + result.userInfo.role)
            statusSetError("Account not verified, Please contact with you instructor")
          }
          else
          {
            console.log(result.userInfo.status  + result.userInfo.role)
            setToast(true);
            setError(null);
               setTimeout(() => {
                dispatch({ type: "SET__USER", payload: result.userInfo });
                localStorage.setItem("auth_token", result.token);
                localStorage.setItem("user", JSON.stringify(result.userInfo));
               }, 3000);
               clearTimeout();

          }
          
         
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if(user && user.role=="Student")
    {
      history.push('/')
    }
    else if(user && user.role==="Admin")
    {
      history.push('/admin-dashboard')
    }
    else if(user && user.role==="Teacher")
    {
      history.push('/teacher-dashboard')
    }
  }, [user])
  return (
    <>
    <div className={Styles.videobackground }>
<video autoPlay loop muted>
        <source src={clip2} type="video/mp4" />
        {/* Add additional source elements for different video formats */}
      </video>
</div>
 < div ClassName ={Styles.logincontainer} >
    <div style={{ fontFamily: "Poppins" }}>
      <Container>
        <Toast_Comp
          setToast={setToast}
          renderToast={toast}
          msg="Login Success"
        />

{statusError.length > 0 ?
  <Alert_Comp variant="danger" msg={statusError} /> :
  null
}

        
         {/* <Toast_Comp
          setToast={setToast2}
          renderToast={toast2}
          msg="You account is not varified"
        /> */}
        <Row>
          <Col md={6} className="mx-auto mt-4 ">
            <Paper className="p-4 shadow rounded">
              <Typography
                className="text-center text-primary mb-3"
                variant="h5"
              >
                Login Here
              </Typography>
              {loading && <Spinner_comp />}
              {error && error.userExist && (
                <Alert_Comp variant="danger" msg={error.userExist} />
              )}

              <Form onSubmit={formSubmitHandler}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                  />
                  <span style={{ color: "red" }}>{error && error.email}</span>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.password}
                  </span>
                </Form.Group>

                <Typography style={{ color: "GrayText" }} variant="subtitle2">
                  Don't Have an account?
                  <Link to="/register">Register Here</Link>
                </Typography>
                <Button
                  className="mt-2"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>

    </div></>
  );
};

export default Login;
