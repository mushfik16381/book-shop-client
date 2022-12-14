import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Category = ({caty}) => {
    const {name, img , _id} = caty;
    
    return (
          <Card >
            <Card.Img className='img_container' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={`/allbooks/${_id}`}><button className='book_btn' variant="primary">See Books</button></Link>
            </Card.Body>
          </Card>
    );
};

export default Category;