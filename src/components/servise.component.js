import React, {Component} from 'react';
import axios from 'axios'
import {  Col, Row } from 'antd';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Carousel } from "react-responsive-carousel";
import Popup from './popup.component';  

function InfoBlock(props) {

        const renderItems = () => (
            props.products && props.products.map(item => (
                
                <div className="block">
                    <p className="info_text"><b>{item.type_service_name} </b></p>
                    <h6>Середня ціна: {item.price} грн.</h6>
                </div>
                
                // <ListGroup.Item>
                //     <div>
                //         {item.type_service_name}
                //     </div>
                //     <div>
                //       Середня ціна: {item.price} грн.
                //     </div>
                // </ListGroup.Item>
            ))
        )
        return (
            <Carousel autoPlay infiniteLoop>
                {renderItems()}   
            </Carousel> 
        )
    }

    
function Service (props) {
   
    const renderItems = () => (
        
             
                <Col lg={3} md={4} xs={12}>
                    <div className="service_block">
                        <div className="service_block_name"><h4>{props.service.servicename}</h4></div>
                        <InfoBlock products={props.service.type_service}/>
                    </div>
                </Col>
           
        
         /* <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header><b>{props.service.servicename}</b></Card.Header>
            <ListGroup variant="flush">
                <InfoBlock products={props.service.type_service}/>
            </ListGroup>
        </Card> */ 
        
        
    )
    return (
        <Row gutter={[8, 8]}>
            {renderItems()}   
        </Row>
    )
    
}
  

export default class ServiceList extends Component {
    constructor(props){
        super(props);

        this.state = {services: [], showPopup: false};
    }
      togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         } 

    componentDidMount(){
        axios.get('http://localhost:5000/service/')
            .then(res =>{
                this.setState({services: res.data})
                
            })
            .catch((error) => {
                console.log(error);
            });
            
    }

    serviceList() {
        return this.state.services.map(currentservice => {
          return <Service service={currentservice} />;
        })
      }


  render() {
    return (
        <div className="page_wrapper box">
            <div className="content_wrapper content">
                <div className="services">
                    <h2>  Ми виконуємо такі види робіт:  </h2>
                    {this.serviceList()}
                     {/* <Row gutter={[8, 8]}>
                        {this.serviceList()}
                    </Row> */}
                </div>
                <div className="contact_form_serv">
                    <h2>Залишіть заявку і ми з вами зв’яжемось!</h2>
                    <div style={{display: "flex",flexFlow:"row wrap"}}>
                        <form style={{width: "30%"}}>
                        <div className="form-group"> 
                            <input  type="text"
                                required
                                placeholder="Ваше ім'я"
                                className="form-control"
                                />
                        </div>
                        </form>
                        <form style={{width: "30%"}}>
                        <div className="form-group"> 
                            <input  type="text"
                                required
                                placeholder="Ваше телефон"
                                className="form-control"
                                />
                        </div>
                        </form>
                        <button className="form_button" onClick={this.togglePopup.bind(this)}> Надіслати заявку</button> 
                        {this.state.showPopup ?  
                        <Popup  
                                text='Ваша заявка успішно надіслана!'  
                                closePopup={this.togglePopup.bind(this)}  
                        />  
                        : null  
                        }  
                        {/* <button className="form_button">Надіслати заявку</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}