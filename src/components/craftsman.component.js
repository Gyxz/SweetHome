import React, {Component} from 'react';
import axios from 'axios'
import {  Col, Row } from 'antd';
import Card from 'react-bootstrap/Card'

const Craftsman = props => (
    <div className="worker_block">
        <Card border="dark" className="worker_card">
            <Card.Header className="worker_header">{props.craftsman.craftsman_name}</Card.Header>
            <Card.Body className="worker_body">
                <Card.Title className="worker_title">Стаж роботи: {props.craftsman.experience} р.</Card.Title>
                <Card.Text className="worker_text">
                    <div className="worker_text_body">
                        Професіонал у сфері:
                    </div>
                    <div className="worker_text_tel">
                        Тел: {props.craftsman.phone}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    
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
        <div className="page_wrapper box">
            <div className="content_wrapper content">
                <div className="worker">
                    <h2>  Наші майстри! </h2>
                
                    <div className="worker_row">
                        {this.craftsmanList()}   
                    </div>
                </div>
            </div>
        </div>
    );
  }
}