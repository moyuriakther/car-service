import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/pages/About";
import Login from "./Components/pages/Login/Login";
import Home from "./Components/pages/Home/Home";
import NotFound from "./Components/pages/NotFound";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import ServiceDetails from "./Components/pages/ServiceDetails/ServiceDetails";
import Register from "./Components/pages/Login/Register";
import RequireAuth from "./Components/pages/Login/RequireAuth";
import Checkout from "./Components/pages/Checkout/Checkout";
import MyLocation from "./Components/pages/MyLocation/MyLocation";
import AddService from "./Components/pages/AddService/AddService";
import ManageServices from "./Components/pages/ManageServices/ManageServices";
import UpdateService from "./Components/pages/UpdateService/UpdateService";
import { ToastContainer } from "react-toastify";
import Order from "./Components/pages/Order/Order";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/location" element={<MyLocation />} />
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageServices />
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <UpdateService />
            </RequireAuth>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
