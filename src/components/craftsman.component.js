import React, {Component} from 'react';
import axios from 'axios'
import {  Col, Row } from 'antd';
import Card from 'react-bootstrap/Card'

const Craftsman = props => (
    <Col lg={6} md={8} xs={24}>
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>{props.craftsman.craftsman_name}</Card.Header>
            <Card.Body hoverable={true}>
                <Card.Title>Стаж: {props.craftsman.experience} р.</Card.Title>
                <Card.Text>
                    {props.craftsman.phone}
                </Card.Text>
            </Card.Body>
        </Card>

    </Col>
  )

export default class CraftsmanList extends Component {
    constructor(props){
        super(props);

        this.state = {craftsmans: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/craftsman/')
            .then(res =>{
                this.setState({craftsmans: res.data})
            })
            .catch((error) => {
                console.log(error);
            });
            
    }

    craftsmanList() {
        return this.state.craftsmans.map(currentcraftsman => {
          return <Craftsman craftsman={currentcraftsman} />;
        })
      }

  render() {
    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  Наші майстри! </h2>
            </div>
                <div >
                    <Row gutter={[9, 9]}>

                        {this.craftsmanList()}

                    </Row>
                </div>
        </div>

    );
  }
}