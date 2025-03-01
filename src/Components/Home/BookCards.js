import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import '../Home/BookCards.scss';
import { Container, Card, Col, Button, Modal } from 'react-bootstrap';
import "./Modal.css"
import Alert from 'react-bootstrap/Alert'
//TODO Create the alret for bookmark 
//TODO Edit the Footer Style
//TODO 



class BookCards extends React.Component {
constructor(props){
  super(props)
  this.state={
    show: false
  }
}
setShow =() => {
  this.setState({
    show: true
  })
}
setclose= () => {
  this.setState({
    show: false
  })
}
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
         

        <Container>

        <div className="clearfix mt-5 mb-2">
            <h4 className="float-left color ">Adventure</h4>

          </div>
          <Slider {...settings} style={{ width: '70rem' }} >
            {this.props.catgories.map((item) => {

              if (item.catgory == 'Adventure') {
                return (
                  <React.Fragment>
                    <Col md="11">
                      <Card  >
                        <Card.Img  onClick={() => this.props.handleShow(item.title, item.img, item.author, item.status, item.pages, item.infoLink, item.catgory)} variant="top" src={item.img} alt="Card image" style={{ height: '30rem' }}></Card.Img>
                        <Card.Body>
                          <Button className="cardButton" onClick={()=> this.props.favourite(item.title,item.img,item.author,item.status,item.pages ,item.infoLink)} variant="warning">
                            <i class="bi bi-bookmark-heart"> BookMark</i>
                           
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>


                  </React.Fragment>


                );


              }


            })}
          </Slider>
        </Container>
        <Modal
         
          centered
          

        >


          <Modal.Body>
            <img className="img-fluid" src={this.props.img} alt={this.props.title} style={{ height: "200px", width: "100px" }} />
          </Modal.Body>
          <Modal.Body className="modal-content">


            <Button style={{ marginRight: "24rem" }} variant="outline-info">
              <i class="bi bi-info-square"></i>
              <a style={{ textDecoration: "none" }} href={this.props.infoLink}> Info</a>

            </Button>
          </Modal.Body>
          <Button style={{ display: "inline-block" }} variant="outline-danger" onClick={this.props.handleClose}>
            <i class="bi bi-x-lg"></i>  Close
          </Button>



        </Modal>

        <Container>
{/* 
        <Alert show={this.state.show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={ this.setShow} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!this.state.show && <Button onClick={this.setclose}>Show Alert</Button>} */}
        </Container>
      </>


      // <Carousel.Item>
      //   <img
      //     className="d-block w-100"
      //     src={this.props.item.img}
      //     alt="First slide"
      //   />
      //   <Carousel.Caption>
      //     <h3>{this.props.item.title}</h3>
      //     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //   </Carousel.Caption>
      // </Carousel.Item>

      //   {/* <Card style={{ width: '18rem', marginTop: '50px' }} onClick={this.show}>
      //               <Card.Img variant="top" src={this.props.item.img} />
      //               <Card.Body>
      //                   <Card.Title>Title: {this.props.item.title}</Card.Title>

      //               </Card.Body>
      //               <ListGroup className="list-group-flush">
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>cat:</strong> {this.props.item.catgory}</ListGroupItem>
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>Author:</strong> {this.props.item.author}</ListGroupItem>
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>Type:</strong> {this.props.item.status}</ListGroupItem>
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}><strong>Pages:</strong>{this.props.item.pages}</ListGroupItem>
      //                   <ListGroupItem style={{ color: 'white', background: '#292b2c' }}>
      //                       <Row xs={2} md={4} lg={6}>
      //                           <Col><Button type="submit" onClick ={()=> this.props.favourite(this.props.item.title,this.props.item.img,this.props.item.author,this.props.item.status,this.props.item.pages ,this.props.item.infoLink)} style={{ marginLeft: '180px' }} variant="outline-info">💟</Button></Col>

      //                       </Row>
      //                       <Col><a className="font-weight-bold text-warning mt-5" href={this.props.item.infoLink}>Read More</a></Col>

      //                   </ListGroupItem>
      //               </ListGroup>
      //           </Card>
      //  */}






    )
  }
}

export default BookCards;