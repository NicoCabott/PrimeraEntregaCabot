import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Footer() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Footer</Card.Title>
                <Card.Text>Derechos reservados</Card.Text>
                <Button variant="primary">Go Link</Button>
            </Card.Body>
        </Card>
    )
}




