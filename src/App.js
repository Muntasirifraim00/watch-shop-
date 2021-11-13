import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/HomePage/Home/Home';
import LoginPage from './Component/LoginPage/LoginPage';
import CustomerPlaceOrder from './Component/Customer/CustomerPlaceOrder/CustomerPlaceOrder';
import CustomerOrderItems from './Component/Customer/CustomerOrderItems/CustomerOrderItems';
import CustomerReview from './Component/Customer/CustomerReview/CustomerReview';
import PrivateRoute from './Component/LoginPage/PrivateRoute';
import Admin from './Component/Admin/Admin';
import AddService from './Component/Admin/AddService/AddService';
import MakeAdmin from './Component/Admin/MakeAdmin/MakeAdmin';
import AdminCheck from './Component/Admin/AdminCheck';
import PrivateRouteForAdmin from './Component/Admin/PrivateRouteForAdmin';
import Sidebar from './Component/Customer/Sidebar/Sidebar';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser], [isAdmin, setIsAdmin]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/customer/placeOrder">
            <CustomerPlaceOrder></CustomerPlaceOrder>
          </Route>
          <Route path="/customer/orderedItems">
            <CustomerOrderItems></CustomerOrderItems>
          </Route>
          <Route path="/customer/review">
            <CustomerReview></CustomerReview>
          </Route>
          <Route path="/adminCheck">
            <AdminCheck></AdminCheck>
          </Route>
          <PrivateRoute path="customer/placeOrder">
            <Sidebar></Sidebar>
          </PrivateRoute>
          <PrivateRouteForAdmin path="/admin/serviceList">
            <Admin></Admin>
          </PrivateRouteForAdmin>
          <PrivateRouteForAdmin path="/admin/addService">
            <AddService></AddService>
          </PrivateRouteForAdmin>
          <PrivateRouteForAdmin path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRouteForAdmin>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
