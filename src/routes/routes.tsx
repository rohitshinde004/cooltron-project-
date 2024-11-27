import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/loginPage';

export const AppRoutes = (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
    </Routes>
);