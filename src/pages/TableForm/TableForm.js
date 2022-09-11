import { useParams, useNavigate, Navigate } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { getTableById, updateTableRequest } from '../../redux/tablesRedux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import styles from './TableForm.module.scss';
const TableForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, Number(id)));
  const [currentTable, setCurrentTable] = useState(table);
  const [billIsActive, setBillIsActive] = useState(false);
  // get data
  useEffect(() => {
    setCurrentTable(table);
    setBillIsActive(currentTable?.status === 'Busy');
  }, [table]);
  const options = [
    { id: 1, value: 'Free' },
    { id: 2, value: 'Reserved' },
    { id: 3, value: 'Busy' },
    { id: 4, value: 'Cleaning' }
  ];
  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTableRequest({
        ...currentTable
      })
    );
    navigate(-1);
  };
  // validators
  const minMaxValidator = (inValue, min, max) => {
    if (inValue === '') {
      return '';
    }
    const inV = Number(inValue);
    const minV = Number(min);
    const maxV = Number(max);
    return inV < minV ? minV : inV > maxV ? maxV : inV;
  };
  // onChange form functions
  const changeStatus = (e) => {
    if (e.target.value === 'Free' || e.target.value === 'Cleaning') {
      setCurrentTable({ ...currentTable, status: e.target.value, bill: '0', people: '0' });
    } else {
      setCurrentTable({ ...currentTable, status: e.target.value });
    }
    setBillIsActive(e.target.value === 'Busy');
  };
  const changePeopleAmount = (e) => {
    const val = minMaxValidator(e.target.value, 0, currentTable.places);
    setCurrentTable({ ...currentTable, people: val });
  };
  const changeMaxPlaces = (e) => {
    const val = minMaxValidator(e.target.value, 0, 10);
    if (currentTable.people > val && val !== '') {
      setCurrentTable({
        ...currentTable,
        places: val,
        people: val
      });
    } else {
      setCurrentTable({ ...currentTable, places: val });
    }
  };
  // return HTML
  if (!currentTable) return <Navigate to="/" />;
  return (
    <div>
      <h4>Table {currentTable.id}</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column xs="auto">
            Status:
          </Form.Label>
          <Col xs="auto">
            <Form.Select value={currentTable.status} onChange={(e) => changeStatus(e)}>
              {options.map((option) => {
                return (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column xs="auto">
            People:
          </Form.Label>
          <Col xs="auto">
            <Form.Control
              type="text"
              className={clsx('text-center', styles.textShort)}
              value={currentTable.people || ''}
              onChange={(e) => changePeopleAmount(e)}></Form.Control>
          </Col>
          /
          <Col xs="auto">
            <Form.Control
              type="text"
              className={clsx('text-center', styles.textShort)}
              value={currentTable.places}
              onChange={(e) => changeMaxPlaces(e)}></Form.Control>
          </Col>
        </Form.Group>
        {billIsActive && (
          <Form.Group as={Row}>
            <Form.Label column xs="auto">
              Bill:
            </Form.Label>
            <Form.Label column xs="auto" className="text-right">
              $
            </Form.Label>
            <Col xs="auto">
              <Form.Control
                type="text"
                className={clsx('text-center', styles.textShort)}
                value={currentTable.bill}
                onChange={(e) =>
                  setCurrentTable({ ...currentTable, bill: e.target.value })
                }></Form.Control>
            </Col>
          </Form.Group>
        )}
        <Button as="input" value={'UPDATE'} className={'mt-2'} variant="primary" type="submit" />
      </Form>
    </div>
  );
};

export default TableForm;
