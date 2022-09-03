import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import TablesAll from './pages/TablesAll/TablesAll';
import TableForm from './pages/TableForm/TableForm';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<TablesAll />} />
        <Route path="/table/:id" element={<TableForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
