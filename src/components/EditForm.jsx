import React from "react";
import { Form, Button } from "react-bootstrap";

export const EditForm = () => {
 
  return (
  
      <Form>
      <Form.Group controlId="formImage">
          <Form.Label>ThumbNail URL</Form.Label>
          <Form.Control type="url" placeholder="Enter url" />
        </Form.Group>


        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formBasicBirthday">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control type="date" placeholder="Enter birthday" />
        </Form.Group>

        <Form.Group controlId="formBasicOwnerName">
        <Form.Label>Select OwnerName (select one):</Form.Label>
      <select class="form-control">
        <option>Liz Drumm </option>
        <option>Jane Smith</option>
        <option>Sam Jones </option>
        <option>Claire Morrison</option>
        <option>Daniel Parry </option>
      </select>
        </Form.Group>
      </Form>
   
  );
};

export default EditForm;
