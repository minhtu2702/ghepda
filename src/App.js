import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import AccordionList from './components/AccordionList';

export default function App() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Container className="my-5 flex-grow-1" style={{ maxWidth: '800px' }}>
        <AccordionList />
      </Container>
      
      <Footer />
    </div>
  );
}