import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Intro from '../pages/Intro';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
        </Routes>
    );
};

export default AppRoutes;
