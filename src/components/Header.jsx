import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold fs-4 m-0">
          🚀 Công Thức Ghép Đá
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}