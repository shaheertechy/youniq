import { Carousel } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Col, Nav, Row, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import TabProductContent from './TabProductContent';

const ProductTabs = () => {
    const [categories, setCategories] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const [key, setKey] = useState(1);
 
    const [products, setProducts] = useState({});
    const onClickOnTab = (tab) => {
       // handleOnclickCategory(tab);
        setKey(tab)
    }
  

    useEffect(() => {
        fetch("https://stg.youniq.art/api/data/category/list")
            .then(res => res.json())
            .then(
                (result) => {
                    setCategories(result);
                    setIsLoader(false);
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }, []);


    return (
        <React.Fragment>
           {isLoader ? <Loader /> : <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => onClickOnTab(k)}
            >
                {categories.map(function (category, index) {
                    
                    return (<Tab eventKey={category.id} title={category.name} >
                            <TabProductContent categoryId={category.id} />
                        </Tab>)
                    ;
                })}

            
            </Tabs>} 
            {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                               <h1>Hello</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h1>Second</h1>
                               
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container> */}
        </React.Fragment>
    );
}

export default ProductTabs;