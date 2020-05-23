import React, {Component} from 'react';
import axios from 'axios'
import {  Col, Row } from 'antd';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Carousel } from "react-responsive-carousel";


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
        
            <div className="service_block">
                <div className="service_block_name"><h4>{props.service.servicename}</h4></div>
                <InfoBlock products={props.service.type_service}/>
            </div>
        
         /* <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header><b>{props.service.servicename}</b></Card.Header>
            <ListGroup variant="flush">
                <InfoBlock products={props.service.type_service}/>
            </ListGroup>
        </Card> */ 
    
    )
    return (
        <div className="service_row">
            {renderItems()}   
        </div>
    )
    
}
  

export default class ServiceList extends Component {
    constructor(props){
        super(props);
        this.onChangeservicename = this.onChangeservicename.bind(this);
        this.state = {servicename:'',services: [],services_drop:[]};
    }
      

    componentDidMount(){
        axios.get('http://localhost:5000/service/')
            .then(res =>{
                this.setState({
                    services: res.data,
                    services_drop: res.data.map(service => service.servicename),
                    servicename: res.data[0].servicename
                })
                
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

    resetForm(){
        alert("Заявка надіслана!");
        document.getElementById('contact-form').reset();
    }

    onChangeservicename(e) {
        this.setState({
            servicename: e.target.value
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
                    <div style={{width:"500px"}}>
                        <form id="contact-form" onSubmit={this.resetForm.bind()}>
                            <div className="form_group_serv">
                                <input placeholder="Ім'я" type="text" className="form-control" id="name" style={{borderRight:"5px solid red"}} required/>
                            </div>
                            <div className="form_group_serv">
                                <select ref="userInput"
                                    required
                                    className="form-control"
                                    value={this.state.servicename}
                                    onChange={this.onChangeservicename}
                                    style={{borderRight:"5px solid red"}}>
                                    {
                                        this.state.services_drop.map(function(service) {
                                        return <option 
                                            key={service}
                                            value={service}>{service}
                                            </option>;
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form_group_serv">
                                <input placeholder="example@gmail.com" type="email" className="form-control" id="email" aria-describedby="emailHelp" style={{borderRight:"5px solid red"}} required />
                            </div> 
                            <div className="form_group_serv">
                                <input placeholder="+38(012)345678" type="tel" className="form-control" id="phone" pattern="^\+?3?8?(0\d{9})$" style={{borderRight:"5px solid red"}} required />
                            </div>
                            <div className="button_form_serv">
                               <button type="submit" className="btn btn-danger button_form_btn_serv">Надіслати</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}