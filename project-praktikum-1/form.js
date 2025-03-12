import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function FormDataDiri() {
  const [formData, setFormData] = useState({
    npm: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birthdate: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [age, setAge] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "npm" && (!/^\d*$/.test(value) || value.length > 10)) return;

    setFormData({ ...formData, [name]: value });
  };

  const calculateAge = (birthdate) => {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.npm || !formData.firstName || !formData.lastName || !formData.birthdate) {
      alert("Semua field wajib diisi kecuali Middle Name!");
      return;
    }
    setAge(calculateAge(formData.birthdate));
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h2>Form Data Diri</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>NPM</Form.Label>
          <Form.Control
            type="text"
            name="npm"
            value={formData.npm}
            onChange={handleChange}
            placeholder="Masukkan NPM"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Masukkan First Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Middle Name (Opsional)</Form.Label>
          <Form.Control
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Masukkan Middle Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Masukkan Last Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Birthdate</Form.Label>
          <Form.Control
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Data Diri</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>NPM:</strong> {formData.npm}</p>
          <p><strong>Fullname:</strong> {`${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim()}</p>
          <p><strong>Age:</strong> {age}th</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormDataDiri;
