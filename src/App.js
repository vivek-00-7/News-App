import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path="/sports"   element={<News key="sports" pageSize={5} country='us' category='sports'/>} />
          <Route exact path="/business"  element={<News key="business" pageSize={5} country='us' category='business'/>} />
          <Route exact path="/entertainment"  element={<News key="entertainment" pageSize={5} country='us' category='entertainment'/>} />
          <Route exact path="/technology"  element={<News key="technology" pageSize={5} country='us' category='technology'/>} />
          <Route exact path="/general"  element={<News key="general" pageSize={5} country='us' category='general'/>} />
          <Route exact path="/"  element={<News key="general" pageSize={5} country='us' category='general'/>} />
          <Route exact path="/science"  element={<News key="science" pageSize={5} country='us' category='science'/>} />
          <Route exact path="/health"  element={<News key="health" pageSize={5} country='us' category='health'/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
