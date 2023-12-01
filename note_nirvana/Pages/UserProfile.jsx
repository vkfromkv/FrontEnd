import React, {useState} from "react";
import {
  Card,
  Button,
  ListGroup,
  ProgressBar,
  Row,
  Col,
  Form,
} from "react-bootstrap";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "Kaka Garu",
    email: "Kaka@gmail.com",
    phone: "(239) 816-9029",
    mobile: "(320) 380-4539",
    address: "Fort Wayne, IN 46835",
  });

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    // Handle saving changes here
    setEditMode(false);
    console.log(userData);
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
                  <h4>Kaka</h4>
                  <p className="text-secondary mb-1">Guitarist</p>
                  <p className="text-muted font-size-sm">
                    Fort Wayne, IN 46835
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <ListGroup variant="flush">
              {/* Repeat the following structure for each list item */}
              <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                <h6 className="mb-0">
                  {/* SVG Icon */}
                  Website
                </h6>
                <span className="text-secondary">https://NoteNirava.com</span>
              </ListGroup.Item>
              {/* ... other list items */}
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
                      <Form.Control
                        type="text"
                        name={key}
                        value={value}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                        className={`${textColor}`}
                      />
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

          <Row className="gutters-sm">
            <Col sm={6} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <h6 className="d-flex align-items-center mb-3">
                    Instruments
                  </h6>
                  {/* Repeat the following structure for each project status */}
                  <small>Web Design</small>
                  <ProgressBar now={80} className="mb-3" />
                  {/* ... other project statuses */}
                </Card.Body>
              </Card>
            </Col>
            {/* Repeat for other half if needed */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
