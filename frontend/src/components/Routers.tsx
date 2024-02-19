import { Route, Routes } from 'react-router-dom';
import InfinityScroll from '../routes/InfinityScroll';
import Home from '../routes/Home';
import ScrollTest from '../pages/ScrollTest';

function Routers() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/infinityScroll'} element={<InfinityScroll />} />
      <Route path={'/scroll'} element={<ScrollTest />} />
    </Routes>
  );
}

export default Routers;
