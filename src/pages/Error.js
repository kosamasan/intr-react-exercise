import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'

export default function Error() {
  return (
    <Container style={{ marginTop: '30px', minHeight: '60vh' }}>
        <h3> Error Page : No articles found</h3>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '40px'}}>
          Go Back To Home
        </Link>
    </Container>
  );
}