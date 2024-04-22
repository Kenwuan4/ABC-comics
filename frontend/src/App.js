import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ListPage from './pages/listPage';
import Navbar from './components/navBar';
import { GirdContextProvider } from './context/gridContext';
import DetailPage from './pages/detailPage';

function App() {
  return (
    <GirdContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Navigate to='/issues'/>}> </Route>
          <Route path='/issues' Component={ListPage}> </Route>
          <Route path="/issues/issue/:id" Component={DetailPage}></Route>
          <Route path='/characters' Component={ListPage}> </Route>
          <Route path="/characters/character/:id" Component={DetailPage}> </Route>
        </Routes>
      </BrowserRouter>
    </GirdContextProvider>
  );
}

export default App;
