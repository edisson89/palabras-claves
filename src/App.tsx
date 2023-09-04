import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  const location = useLocation()
  return (
    <div>
     
       {location.pathname !== "/" ? (
        <Home  />
      ) : (
        <Home />
      )}

       <Routes >
        <Route path="/home" element={<Home />} />
       </Routes>
      
      
    </div>
  );
}

export default App;
