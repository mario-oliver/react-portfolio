import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout';
import Home from './pages/home';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout></SharedLayout>}>
          <Route index path="/" element={<Home></Home>}></Route>
          <Route index path="/about" element={<h1>About</h1>}></Route>
          <Route path="*" element={<Error></Error>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
