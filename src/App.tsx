import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import Home from './Home';
import NotFound from './NotFound';
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
