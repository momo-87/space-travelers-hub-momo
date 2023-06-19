import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Rockets from 'routes/Rockets';
import Missions from 'routes/Missions';
import MyProfile from 'routes/MyProfile';
import NotMatch from 'routes/NotMatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
