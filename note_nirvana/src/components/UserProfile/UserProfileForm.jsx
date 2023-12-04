import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const UserProfileForm = ({
  userData,
  handleInputChange,
  editMode,
  saveChanges,
  handleEdit,
}) => {
  const textColor = editMode ? "text-dark" : "text-secondary";

  return (
    <Form>
      {/* Name Field */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>
          Name
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            name="name"
            value={userData.name || ""}
            onChange={handleInputChange}
            className={`${textColor}`}
            readOnly={!editMode}
            required
          />
        </Col>
      </Form.Group>

      {/* Username Field */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>
          Username
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            name="username"
            value={userData.username || ""}
            onChange={handleInputChange}
            className={"text-secondary"}
            readOnly={true}
          />
        </Col>
      </Form.Group>

      {/* Artist Checkbox */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>
          Are you an Artist?
        </Form.Label>
        <Col sm={9}>
          <Form.Check
            name="is_artist"
            type="checkbox"
            label="Yes"
            checked={userData.is_artist}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </Col>
      </Form.Group>

      {/* Instrument Dropdown */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>
          Instrument
        </Form.Label>
        <Col sm={9}>
          <Form.Select
            name="preferred_instrument"
            value={userData.preferred_instrument}
            onChange={handleInputChange}
            disabled={!editMode}
            className={`${textColor}`}
            required
          >
            <option value="">Select an instrument</option>
            <option value="Guitar">Guitar</option>
            <option value="Piano">Piano</option>
            <option value="Violin">Violin</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* City Field */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>
          City
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            name="city"
            value={userData.city || ""}
            onChange={handleInputChange}
            className={`${textColor}`}
            readOnly={!editMode}
            required
          />
        </Col>
      </Form.Group>

      {/* Country Field */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3}>
          Country
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            name="country"
            value={userData.country || ""}
            onChange={handleInputChange}
            className={`${textColor}`}
            readOnly={!editMode}
            required
          />
        </Col>
      </Form.Group>

      <hr />

      {/* Edit/Save Button */}
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
  );
};

export default UserProfileForm;
