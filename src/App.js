import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  NotFound from './components/NotFound';
import Home from './components/Home';
import Auth from './components/Auth';
import { useDispatch } from 'react-redux';
import { setAuthListener } from './feature/userAuth.slice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(setAuthListener());
  })

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Auth />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;