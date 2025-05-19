import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ItemPage from './pages/ItemPage';

import "@fontsource/heebo/200.css";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/700.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/item/:categoryId/:itemId" element={<ItemPage />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
