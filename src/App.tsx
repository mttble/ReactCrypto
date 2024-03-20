import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout'; // Import the Layout component
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
