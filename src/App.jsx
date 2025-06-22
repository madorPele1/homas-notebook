import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import StartPage from "./pages/StartPage";
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import PasswordGate from "./components/PasswordGate";

import "@fontsource/heebo/200.css";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/700.css";

function App() {
  const location = useLocation();
  const state = location.state;

  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem("unlocked") === "true"
  );

  const handleUnlock = () => {
    sessionStorage.setItem("unlocked", "true");
    setUnlocked(true);
  };

  if (!unlocked) {
    return <PasswordGate onUnlock={handleUnlock} />;
  }

  return (
    <>
      <Routes location={state?.background || location}>
        <Route path="/" element={<StartPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/item/:categoryId/:itemId" element={<ItemPage />} />
      </Routes>

      {state?.background && (
        <Routes>
          <Route
            path="/item/:categoryId/:itemId"
            element={<ItemPage modal />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
