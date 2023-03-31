import { Route, Routes } from "react-router-dom";
import "./App.css";
import MiniDrawer from "./Drawer";
import MovieGene from "./movie";
import SignUp from "./signup";
import Login from "./Logout.js";
import Account from "./Account";
import Search from "./Search.jsx";
import Autcontextprovider from "./context";
function App() {
  return (
    <div className="App">
      {/* {call th the context api and wrap it with the component t pass props witout an issue} */}
      <Autcontextprovider>
        <MiniDrawer />

        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Logout" element={<Login />} />
          <Route path="/home" element={<MovieGene />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </Autcontextprovider>
    </div>
  );
}

export default App;
