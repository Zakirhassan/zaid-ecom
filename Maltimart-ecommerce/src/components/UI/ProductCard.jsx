
import React from 'react'

import {motion} from 'framer-motion'
import '../../style/product-card.css'
import { Container, Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'


const ProductCard = ({item}) => {
  return (
      <Col lg='3' md='4'>
        <div className="product__items">
    <div className="product__img">
        <motion.img whileHover={{ scale:0.9 }} style={{width:"300px"}} src={item?.imgUrl} alt="" />
    </div>

    <div className="p-2 product__info">
        <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item?.productName}</Link>
        </h3>
        <span >{item.category}</span>
    </div>

    <div className="product__card-bottom d-flex align-item-center
    justify-content-between p-2">
        <span className="price">${item?.price}</span>
        <motion.span whileTap={{ scale: 1.2 }}><i class="ri-add-line"></i></motion.span>
    </div>
</div>
      </Col>
    )
}

export default ProductCard