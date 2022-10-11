import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../../pages/Header';
import Typography from './Typography';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />

        <Route path="/" element={<Typography />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;