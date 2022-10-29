import Home from "./components/routes/Home/Home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from './components/routes/Navigation/Navigation.component';
import SignIn from "./components/routes/SignIn/SignIn.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn/>} />
    </Route>
  </Routes>
)};

export default App;