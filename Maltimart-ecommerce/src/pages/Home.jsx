
import React, {useState, useEffect}  from 'react'
import { motion  } from 'framer-motion'
import { Link } from 'react-router-dom'
import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet'
import "../style/home.css"

import { Container, Row,Col } from 'reactstrap'

import heroImg from '../assets/images/hero-img.png'
import Services from '../Services/Services'
import ProductList from '../components/UI/ProductList'
 
const Home = (props) => {
  const [trendingproducts, setTrendingproducts] = useState("product");
  

  const year = new Date ().getFullYear()

   useEffect (()=>{
    const filteredProducts = products.filter (item=> item.category == 'chair')
   
    setTrendingproducts(filteredProducts);
  },[]);
  return (
     <Helmet title={"Home"}> 
     <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
             <div className="hero__content">
              <p className="hero__subtitles">Trending product in {year} 
              </p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Aut omnis suscipit velit ipsum libero hic tempore nam incidunt dolorem nostrum?</p>
                 <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>SHOP NOW
                 </Link></motion.button>

             </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
              <img src={heroImg} alt="" />
              </div>

            </Col>



          </Row>
        </Container>
     </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className="section__title">Trending Product</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
         <Container>
         <Row>
             <Col lg='12'>
              <h2 className="section__title">Best Sales</h2>
             </Col>
            </Row>
         </Container>
      </section>

    </Helmet>
  )
}

export default Home