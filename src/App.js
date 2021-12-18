import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import AuthProvide from './Context/AuthProvide';
import AddAService from './Pages/AddAService/AddAService';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Loginn from './Pages/Login/Loginn';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageAllOrder from './Pages/ManageAllOreder/ManageAllOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import NotFound from './Pages/NotFound/NotFound';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvide>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route path ="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Loginn></Loginn>
          </Route>

          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/myorder">
              <MyOrder></MyOrder>
          </Route>
          <Route path="/manageorder">
              <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route path="/addservice">
              <AddAService></AddAService>
          </Route>
          

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvide>
      
    </div>
  );
}

export default App;
