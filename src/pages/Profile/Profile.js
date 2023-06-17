import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./Profile.module.css";
import ToggleProfileInfo from "./ToggleProfileInfo/ToggleProfileInfo";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className={Styles.main}>
      <CommonHeader title={user && user.userName && user.userName} />
      <div className={Styles.avatar}>
        <img
          className={Styles.avatar__profile__pic}
          style={{
            height: "40px",
            width: "60px",
            objectFit: "contain",
          }}
          src={user.profilePicture}
          alt=""
        />
        {/* <Avatar className={Styles.avatar__profile__pic} /> */}
      </div>
      <Container fluid className="mb-5">
        <Row>
          <Col md={4}></Col>
          <Col md={4} className="">
            <Paper className="p-4 m-3 d-flex flex-column shadow">
              <Typography className="my-3 text-primary" variant="h5">
                Profile
              </Typography>
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Full name
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.userName}
              </Typography>
              <br />
              {user && user.role !== "Admin" && (
                <Typography className="my-2" style={{ color: "gray" }} variant="body2">
                  Student Id
                </Typography>
              )}
              {user && user.role !== "Admin" && (
                 <Typography variant="body1">
                 {user && user.id && user.id}
               </Typography>
              )}
             
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Preferred language
              </Typography>
              <Typography variant="body1">English</Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                First access to site
              </Typography>
              <Typography variant="body1">
                Sunday, 14 February 2021, 8:44 AM
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Last access to site
              </Typography>
              <Typography variant="body1">
                Wednesday, 5 May 2021, 2:44 PM
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Email address
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.email}
              </Typography>
            </Paper>




          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
