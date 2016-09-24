import React, { PropTypes } from 'react';


import { Button, Carousel } from 'react-bootstrap';

const carouselInstance=(
           
            <Carousel>

                <Carousel.Item>
                  <img alt="900x500" src="http://s.qdcdn.com/cl/10090000,800,450.jpg"/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img  alt="900x500" src="http://s.qdcdn.com/cl/10151611,800,450.jpg"/>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img  alt="100x500" src="http://s.qdcdn.com/cl/10151570,800,450.jpg"/>
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        )


class Lun extends React.Component {
	render () {
        return(
            <div>
                {carouselInstance}
            </div>


        )
    }
}


export default Lun ;

