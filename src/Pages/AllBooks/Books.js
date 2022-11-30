import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import BookingModal from '../BookingModal/BookingModal';

const Books = ({books}) => {
    const { name, location, original_price, resale_price, seller_name, years_of_use, img_url, category_id } = books;
    return (
        <Card >
            <Card.Img className='img_container' variant="top" src={img_url} />
            <Card.Body>
                <h2>{name}</h2>
                <h6>Location: {location}</h6>
                <h6>Product Price: {original_price}</h6>
                <h4>Resell Price: {resale_price}</h4>
                <h6>Uses: {years_of_use}</h6>
                <h6>Seller Name: {seller_name}</h6>
                <BookingModal
                    books={books}                
                >
                </BookingModal>
            </Card.Body>
          </Card>
    );
};

export default Books;