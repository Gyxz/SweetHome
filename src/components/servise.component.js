import React, {Component} from 'react';
import axios from 'axios'
import {  Col, Row } from 'antd';
import Card from 'react-bootstrap/Card'

const Service = props => (


    <Col lg={6} md={8} xs={24}>
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>{props.service.servicename}</Card.Header>
            <Card.Body hoverable={true}>
                <Card.Title> {props.service.craftsman_name} </Card.Title>
                <Card.Text>
                    
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
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  Ми виконуємо такі види робіт:  </h2>
            </div>
                <div >
                    <Row gutter={[16, 16]}>
                        {this.serviceList()}
                    </Row>
                </div>
        </div>
    );
  }
}