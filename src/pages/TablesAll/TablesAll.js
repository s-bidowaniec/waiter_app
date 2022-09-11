import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import TableRow from '../../components/TableRow/TableRow';
import { Container } from 'react-bootstrap';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useEffect, useState } from 'react';

const TablesAll = () => {
  const tables = useSelector((state) => getAllTables(state));
  const [currentTables, setCurrentTables] = useState(tables);
  // get data
  useEffect(() => {
    setCurrentTables(tables);
  }, [tables]);
  if (currentTables.length === 0) return <LoadingSpinner />;
  return (
    <Container>
      <h2>All Tables</h2>
      {currentTables.map((table) => {
        return <TableRow key={table.id} table={table} />;
      })}
    </Container>
  );
};

export default TablesAll;
