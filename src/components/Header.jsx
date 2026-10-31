import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold fs-4 m-0">
          🚀 Công Thức Ghép Đá
        </Navbar.Brand>

        <a
          href="https://toantth.github.io/ghep-da/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-info fw-bold ms-auto"
          style={{
            borderRadius: '8px',
            padding: '7px 16px',
            fontSize: '0.85rem',
            letterSpacing: '0.5px',
            borderColor: '#38bdf8',
            color: '#38bdf8',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#38bdf8';
            e.currentTarget.style.color = '#000000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#38bdf8';
          }}
        >
          TẠO CÔNG THỨC RIÊNG
        </a>
      </Container>
    </Navbar>
  );
}
