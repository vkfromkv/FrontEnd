import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  ListGroup,
  ProgressBar,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import axios from "axios";
import UserProfileForm from "../components/UserProfile/UserProfileForm";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  axios.defaults.withCredentials = true;
  const fetchUserData = async () => {
    axios
      .get("http://localhost:8081/User/GetUserProfile")
      .then((res) => {
        console.log(res);
        if (res.data.status === 200 && res.data) {
          setUserData(res.data.data);
        } else {
          console.error("Failed to fetch user data:", res);
        }
      })
      .catch((error) => {
        console.error("Error during the fetch operation:", error);
      });
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, type, checked } = e.target;
    const value = type === "checkbox" ? checked : e.target.value;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    let isValid = true;
    let errorMessage = "";

    // Loop through each field to check if it's filled
    Object.entries(userData).forEach(([key, value]) => {
      console.log(key);
      if (!value && key !== "is_artist") {
        isValid = false;
        errorMessage += `Please fill in the ${key} field.\n`;
      }
    });

    if (!isValid) {
      alert(errorMessage);
      return;
    }

    // Proceed with saving changes if all fields are valid
    axios
      .post("http://localhost:8081/User/UpdateUserProfile", userData)
      .then((res) => {
        if (res.status === 201) {
          setEditMode(false);
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error during save operation");
      });
  };

  const textColor = editMode ? "text-dark" : "text-secondary";

  return (
    <div className="container main-body">
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            User Profile
          </li>
        </ol>
      </nav>

      <Row className="gutters-sm">
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://m.media-amazon.com/images/I/81KRhFOr0OL.png"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>{userData.name && "Welcome, " + userData.name}</h4>
                  <p className="text-secondary mb-1">
                    {userData.instrument &&
                      "I play " + userData.instrument + "!"}
                  </p>
                  <p className="text-muted font-size-sm">
                    {userData.city + ", " + userData.country}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">Website</h6>
                <span className="text-secondary">https://NoteNirava.com</span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <UserProfileForm
                userData={userData}
                handleInputChange={handleInputChange}
                editMode={editMode}
                saveChanges={saveChanges}
                handleEdit={handleEdit}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
