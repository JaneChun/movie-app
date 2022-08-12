import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route exact path="/movie-app" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
