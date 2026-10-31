import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Modal, Image } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import AccordionList from './components/AccordionList';

export default function App() {
  const [selectedBanner, setSelectedBanner] = useState(null);

  // 2 ảnh + 1 gif bên trái
  const leftImages = [
    { src: `${process.env.PUBLIC_URL}/images/anh1.jpg`, alt: 'Ảnh 1' },
    { src: `${process.env.PUBLIC_URL}/images/anh2.jpg`, alt: 'Ảnh 2' },
    { src: `${process.env.PUBLIC_URL}/gif/cat1.gif`, alt: 'Cat 1 GIF' },
  ];

  // 2 ảnh + 1 gif bên phải
  const rightImages = [
    { src: `${process.env.PUBLIC_URL}/images/anh3.jpg`, alt: 'Ảnh 3' },
    { src: `${process.env.PUBLIC_URL}/images/anh4.jpg`, alt: 'Ảnh 4' },
    { src: `${process.env.PUBLIC_URL}/gif/cat2.gif`, alt: 'Cat 2 GIF' },
  ];

  return (
    <div 
      className="App"
      style={{ 
        backgroundImage: `linear-gradient(rgba(18, 18, 20, 0.85), rgba(18, 18, 20, 0.85)), url(${process.env.PUBLIC_URL}/images/background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column' 
      }}
    >
      <Header />
      
      <Container fluid className="px-lg-4 my-4 flex-grow-1">
        <Row className="justify-content-center align-items-start g-4">
          
          {/* Cột trái: anh1, anh2, cat1.gif */}
          <Col className="d-none d-lg-flex flex-column align-items-end gap-3 sticky-top-custom col-auto">
            {leftImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="side-banner-img"
                onClick={() => setSelectedBanner(img.src)}
                title="Bấm để phóng to"
              />
            ))}
          </Col>

          {/* Cột giữa: Nội dung công thức ghép đá */}
          <Col xs={12} className="col-auto flex-grow-1" style={{ maxWidth: '850px' }}>
            <AccordionList />
          </Col>

          {/* Cột phải: anh3, anh4, cat2.gif */}
          <Col className="d-none d-lg-flex flex-column align-items-start gap-3 sticky-top-custom col-auto">
            {rightImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="side-banner-img"
                onClick={() => setSelectedBanner(img.src)}
                title="Bấm để phóng to"
              />
            ))}
          </Col>

        </Row>
      </Container>
      
      {/* Modal phóng to ảnh / gif 2 bên khi click */}
      <Modal 
        show={!!selectedBanner} 
        onHide={() => setSelectedBanner(null)} 
        centered 
        size="lg"
      >
        <Modal.Header closeButton className="bg-dark text-white border-secondary">
          <Modal.Title className="fs-6">Chi tiết ảnh</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-2 bg-dark rounded-bottom">
          <Image 
            src={selectedBanner} 
            alt="Preview" 
            fluid 
            style={{ maxHeight: '80vh', objectFit: 'contain' }} 
          />
        </Modal.Body>
      </Modal>

      <Footer />
    </div>
  );
}
