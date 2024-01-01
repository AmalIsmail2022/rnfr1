import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ViewEmployeesHook from '../../hook/view-employees-hook';
import { Link } from 'react-router-dom';

const EmployeeHeader = () => {
    // const [items, loading, pageCount, getPage] = ViewEmployeesHook();
    // const [empItems, empSetItems] = useState([]);

    //  useEffect(() => {
    //    if (items) empSetItems(items.data);
    //  }, [items]);
    return (
      <div className="cat-header">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center py-2 flex-wrap ">
              <div className="cat-text-header ">ALL</div>
              <div className="cat-text-header ">ALL</div>
              <div className="cat-text-header ">ALL</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default EmployeeHeader;
