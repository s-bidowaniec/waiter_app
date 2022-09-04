import { Routes, Route } from 'react-router-dom';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import TablesAll from './pages/TablesAll/TablesAll';
import TableForm from './pages/TableForm/TableForm';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  return (
    <div className="App">
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<TablesAll />} />
          <Route path="/table/:id" element={<TableForm />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
