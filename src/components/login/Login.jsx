import { useState, useRef } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { handleLogin, isLogin } = useAuth();
  const navigate = useNavigate();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  if (isLogin) {
    return <Navigate to="/" replace={true} />;
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setError((prevErrors) => ({
      ...prevErrors,
      email: event.target.value.length === 0,
    }));
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setError((prevErrors) => ({
      ...prevErrors,
      password: event.target.value.length === 0,
    }));
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (emailInputRef.current.value.length === 0) {
      alert("¡Email vacío!");
      emailInputRef.current.focus();
      setError((prevErrors) => ({
        ...prevErrors,
        email: true,
      }));
      return;
    }

    if (password.length === 0) {
      alert("¡Password vacío!");
      passwordInputRef.current.focus();
      setError((prevErrors) => ({
        ...prevErrors,
        password: true,
      }));
      return;
    }

    // Obtener usuarios registrados desde localStorage
    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Buscar usuario que coincida con email y contraseña
    const foundUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      handleLogin(); // marca como logueado en el context
      localStorage.setItem("token", "true");

      // Guardamos el nombre del usuario logueado
      localStorage.setItem("loggedUser", JSON.stringify(foundUser.name));

      navigate("/");
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="conteiner-login">
        <Card.Body>
          <Row>
            <h5>Bienvenido a Commics</h5>
          </Row>
          <Form>
            <FormGroup className="mb-4">
              <Form.Control
                ref={emailInputRef}
                value={email}
                onChange={handleChangeEmail}
                type="email"
                placeholder="Ingresar email"
              />
              {error.email && (
                <p className="text-danger">El email no debe ser vacío</p>
              )}
            </FormGroup>
            <FormGroup className="mb-4">
              <Form.Control
                ref={passwordInputRef}
                value={password}
                onChange={handleChangePassword}
                type="password"
                required
                placeholder="Ingresar contraseña"
              />
              {error.password && (
                <p className="text-danger">El password no debe ser vacío</p>
              )}
            </FormGroup>
          </Form>
          <Row>
            <Col />
            <Col md={6} className="d-flex justify-content-end gap-4">
              <Button variant="secondary" onClick={onLogin} type="button">
                Login
              </Button>
              <Button
                variant="primary"
                onClick={() => navigate("/RegisterUser")}
                type="button"
              >
                Register
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </div>
    </div>
  );
};

export default Login;
