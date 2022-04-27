import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/ManageServices/ManageServices";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
