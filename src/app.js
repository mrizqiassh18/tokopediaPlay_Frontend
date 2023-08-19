import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoDetailPage from './page/VideoDetailPage'; //
import HomePage from './page/HomePage';
import './HomePage.css';
import './VideoDetailPage.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App;