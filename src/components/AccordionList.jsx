import React, { useState, useMemo } from 'react';
import { Accordion, Image, Modal, Button } from 'react-bootstrap';
import { accordionData } from '../data/data';

export default function AccordionList() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Tạo màu ngẫu nhiên cho từng title (dùng HSL sáng nổi bật trên nền tối, cố định qua re-render)
  const titleColors = useMemo(() => {
    const map = {};
    accordionData.forEach((item) => {
      const hue = Math.floor(Math.random() * 360);
      map[item.id] = `hsl(${hue}, 85%, 65%)`;
    });
    return map;
  }, []);

  const handleCopy = (codeText, id) => {
    navigator.clipboard.writeText(codeText);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div>
      <div className="mb-4 text-center">
        <h2 className="fw-bold mb-2">Công Thức Ghép Đá By EmTus</h2>
        <p className="text-muted">Bấm vào từng mục để xem mô tả, phóng to ảnh hoặc bấm nút để copy code cho tool.</p>
        <p className="text-muted">
          Tự tạo công thức tại{" "}
          <a 
            href="https://toantth.github.io/ghep-da/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            đây
          </a>
          .
        </p>
      </div>

      <Accordion defaultActiveKey="0" className="shadow-sm rounded">
        {accordionData.map((item) => (
          <Accordion.Item eventKey={item.id} key={item.id}>
            <Accordion.Header>
              <span 
                className="fw-semibold accordion-title" 
                style={{ color: titleColors[item.id] || '#38bdf8' }}
              >
                {item.title}
              </span>
            </Accordion.Header>
            <Accordion.Body className="bg-white">
              <div className="row align-items-center">
                
                {/* Cột hiển thị Ảnh & Mô tả ảnh (image_des) */}
                <div className="col-md-4 mb-3 mb-md-0 text-center">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fluid 
                    rounded 
                    onClick={() => setSelectedImage({ url: item.image, title: item.title })}
                    style={{ 
                      maxHeight: '160px', 
                      objectFit: 'cover', 
                      width: '100%', 
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease-in-out'
                    }} 
                    className="img-hover"
                  />
                  {/* Hiển thị image_des ở đây */}
                  <small className="text-muted fw-semibold d-block mt-2" style={{ fontSize: '12px' }}>
                    {item.image_des}
                  </small>
                  <small className="text-primary d-block" style={{ fontSize: '11px' }}>
                    🔍 Click vào ảnh để phóng to
                  </small>
                </div>

                {/* Cột hiển thị Mô tả chi tiết & Nút Copy Code */}
                <div className="col-md-8">
                  <p className="text-secondary mb-3" style={{ lineHeight: '1.6' }}>
                    {item.description}
                  </p>

                  {item.code && (
                    <Button 
                      variant={copiedId === item.id ? "success" : "outline-primary"} 
                      size="sm"
                      onClick={() => handleCopy(item.code, item.id)}
                      className="fw-semibold px-3 py-2 btn-copy-code"
                      style={{ color: '#000000' }}
                    >
                      {copiedId === item.id ? "✓ Đã copy code vào bộ nhớ tạm!" : "📋 Copy CODE"}
                    </Button>
                  )}
                </div>

              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* ================= MODAL PHÓNG TO ẢNH ================= */}
      <Modal 
        show={!!selectedImage} 
        onHide={() => setSelectedImage(null)} 
        centered 
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-6 text-secondary">
            {selectedImage?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-2 bg-dark rounded-bottom">
          <Image 
            src={selectedImage?.url} 
            alt="Preview" 
            fluid 
            style={{ maxHeight: '80vh', objectFit: 'contain' }} 
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
