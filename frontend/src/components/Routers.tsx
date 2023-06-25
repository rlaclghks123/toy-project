import { Route, Routes } from 'react-router-dom';
import InfinityScroll from '../routes/InfinityScroll';
import Home from '../routes/Home';

function Routers() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/infinityScroll'} element={<InfinityScroll />} />
    </Routes>
  );
}

export default Routers;
