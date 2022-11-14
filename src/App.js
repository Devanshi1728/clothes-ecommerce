import { useContext } from "react";
import Home from "./routes/Home/Home.component";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./contexts/user.context";
import Navigation from './routes/Navigation/Navigation.component';
import Authentication from "./routes/Authentication/Authentication.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route
          path="auth"
          element={
            currentUser ? <Navigate to="/" replace /> : <Authentication />
          }
        />
      </Route>
  </Routes>
)};

export default App;
