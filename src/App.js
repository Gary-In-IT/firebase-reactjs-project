import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./components/Header";
import CreateListing from "./Pages/CreateListing";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import EditListing from "./Pages/EditListing";



function App() {
  return (
    <div className="App">

      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/offers" element={<Offers />} />

            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />              
            </Route>

            <Route path="create-listing" element={<PrivateRoute />}>
              <Route path="/create-listing" element={<CreateListing/>} /> 
            </Route>

            <Route path="edit-listing" element={<PrivateRoute />}>
              <Route path="/edit-listing:listingId" element={<EditListing/>} /> 
            </Route>
            
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp/>} />
                       
          </Routes>
          
      </Router>

      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>
  );
}


export default App;
