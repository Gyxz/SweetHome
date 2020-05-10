import React, {Component} from 'react';
import axios from 'axios'
import {  Col, Row } from 'antd';
import Card from 'react-bootstrap/Card'

function UserCardBlock(props) {

        const renderItems = () => (
            props.products && props.products.map(item => (
                <div key={item._id}>
                    <p>Type_service_name: {item.type_service_name}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))
        )
        return (
            <div>
                
                {renderItems()}
                    
            </div>
        )
    }
const Service = props => (

    <Col lg={6} md={8} xs={24}>
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>{props.service.servicename}</Card.Header>
            <Card.Body>
                <Card.Title> {props.service.type_service.price} </Card.Title>
                <Card.Text>
                    <UserCardBlock products={props.service.type_service}/>
                </Card.Text>
            </Card.Body>
        </Card>

    </Col>
    
  )
  

export default class ServiceList extends Component {
    constructor(props){
        super(props);

        this.state = {services: []};
    }

    renderItems() {
        return this.state.type_service.map(item => (
          <div key={item._id}>
            <p>Type_service_name: {item.type_service_name}</p>
            <p>Price: {item.price}</p>
          </div>
        ));
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
                
                    <div >
                        <Row gutter={[16, 16]}>
                            {this.serviceList()}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}