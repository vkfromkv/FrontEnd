import React, { useState } from "react";
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

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);

  const [userData, setUserData] = useState({
    name: "Kaka Garu",
    username: "kaka@gmail.com",
    artist: true,
    instrument: null,
    city: "Fort Wayne",
    country: "USA",
  });

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
      if (!value && key !== "artist") { // Assuming 'artist' is a checkbox and might be false
        isValid = false;
        errorMessage += `Please fill in the ${key} field.\n`;
      }
    });
  
    // If not valid, show the error message and stop the function
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
              <Form>
                {Object.entries(userData).map(([key, value]) => (
                  <Form.Group as={Row} className="mb-3" key={key}>
                    <Form.Label column sm={3} className="text-capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </Form.Label>
                    <Col sm={9}>
                      {key !== "artist" && key !== "Instrument" ? (
                        <Form.Control
                          type="text"
                          name={key}
                          value={value || ""}
                          onChange={handleInputChange}
                          className={`${textColor}`}
                          readOnly={!editMode}
                          required
                        />
                      ) : key === "artist" ? (
                        <Form.Check
                          name={key}
                          type="checkbox"
                          label="Are you an Artist?"
                          checked={value || false} // Use checked attribute for checkbox
                          onChange={handleInputChange}
                          disabled={!editMode}
                        />
                      ) : (
                        key === "Instrument" && (
                          <Form.Select
                            name={key}
                            checked={value || ""}
                            onChange={handleInputChange}
                            disabled={!editMode}
                            aria-readonly={!editMode}
                            className={`${textColor}`}
                            required
                          >
                            <option value="">Select an instrument</option>
                            <option value="Guitar">Guitar</option>
                            <option value="Piano">Piano</option>
                            <option value="Violin">Violin</option>
                          </Form.Select>
                        )
                      )}
                    </Col>
                  </Form.Group>
                ))}
                <hr />
                {editMode ? (
                  <Button variant="success" onClick={saveChanges}>
                    Save Changes
                  </Button>
                ) : (
                  <Button variant="info" onClick={handleEdit}>
                    Edit
                  </Button>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
