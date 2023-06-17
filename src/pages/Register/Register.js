import { Button, Container, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Alert_Comp from "../../components/Alert/Alert_Comp";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import Toast_Comp from "../../components/Toast/Toast_Comp";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Styles from "./register.module.css"

import clip1 from "../../assets/videos/avaition.mp4"
import clip2 from "../../assets/videos/pexels-axelmark-4791433-1920x1080-30fps.mp4"
import clip3 from "../../assets/videos/pexels-hampie-15558109-1920x1080-30fps.mp4"
import clip4 from "../../assets/videos/pexels-pixabay-854271-1280x720-30fps.mp4"

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState();
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const history = useHistory();
  const [courseThumbnail, setCourseThumbnail] = useState("");
  const [imgLabel, setImgLabel] = useState("Choose photo");

  const {user} = useSelector((state) => state.auth);
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };
  
 useEffect(() => {
    setImgLabel(courseThumbnail.name);
  }, [courseThumbnail]);


  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);
    formData.append('profilePicture', courseThumbnail);
    formData.append('id', id);

    fetch("/auth/register", {
      method: "post",
     
      body:formData
      // body: JSON.stringify({
      //   userName,
      //   email,
      //   password,
      //   confirmPassword,
      // }),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        console.log(result);
        if (result.errors) {
          setError(result.errors);
        } else {
          setToast(true);
          setError(null);
          setTimeout(() => {
            history.push("/login");
          }, 3000);
          clearTimeout();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    <div>
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
          msg="Registration Success Please Login"
        />
        <Row>
          <Col md={6} className="mx-auto mt-4 ">
            <Paper className="p-4 shadow rounded">
              <Typography
                className="text-center text-primary mb-3"
                variant="h5"
              >
                Register Here
              </Typography>
              {loading && <Spinner_comp />}
              {error && error.user && (
                <Alert_Comp variant="danger" msg={error.user} />
              )}

              <Form onSubmit={formSubmitHandler}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="Enter Your Fullname"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.userName}
                  </span>
                </Form.Group>

                <Form.Group controlId="formBasicId">
                  <Form.Label>Student Id</Form.Label>
                  <Form.Control
                    onChange={(e) => setId(e.target.value)}
                    type="text"
                    placeholder="Enter Student Id"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.id}
                  </span>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                  />
                  <span style={{ color: "red" }}>{error && error.email}</span>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.password}
                  </span>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.confirmPassword}
                  </span>

            <Form.Group className="input__file">

              <label>Profile picture</label>
              <br />
              <Form.File
                required
                type="file"
                filename="profilePicture"
                onChange={(e) => setCourseThumbnail(e.target.files[0])}
                id="custom-file"
                custom
                label={imgLabel ? `${imgLabel}` : "Choose photo"}
              />
               <span style={{ color: "red" }}>
                    {error && error.profilePicture}
                  </span>
            </Form.Group>
                </Form.Group>

               
                <Typography style={{ color: "GrayText" }} variant="subtitle2">
                  Already Have an account?
                  <Link to="/login">Login Here</Link>
                </Typography>
                <Button
                  className="mt-2"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div></div>
      </div>
  );
};

export default Register;
