import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RegisterUser.css"; // Importamos los estilos

const RegisterUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Traer lista de usuarios registrados o array vacío
    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Verificar si el email ya está registrado
    const emailExists = storedUsers.some(
      (user) => user.email === formData.email
    );

    if (emailExists) {
      alert("Este email ya está registrado. Iniciá sesión o usá otro.");
      return;
    }

    // Crear el nuevo usuario
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    // Agregar el nuevo usuario a la lista y guardar en localStorage
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

    alert("Registro exitoso, ahora podés iniciar sesión");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="contenedor-button-atras">
        <Button
          className="register-back-button"
          onClick={() => navigate("/login")}
        >
          Atrás
        </Button>
      </div>
      <div className="register-box">
        <h2 className="register-title">Registro</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirma tu contraseña"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button className="register-button mt-5" type="submit">
            Registrarse
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterUser;
