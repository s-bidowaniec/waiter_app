import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const TableRow = (props) => {
  return (
    <Container className={'border-bottom'}>
      <Row>
        <Col>
          <h4>Table {props.table.id}</h4>
        </Col>
        <Col>
          <p>
            <b>Status: </b> {props.table.status}
          </p>
        </Col>
        <Col>
          <Button as={NavLink} to={'/table/' + props.table.id}>
            Show more
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

TableRow.propTypes = {
  table: PropTypes.object
};

export default TableRow;
