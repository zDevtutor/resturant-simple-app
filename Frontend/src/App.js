import "./App.css";
import Meal from "./components/pages/Meal";
import Order from "./components/pages/Order";
import Reports from "./components/pages/Reports";
import NotFoundPage from "./components/pages/NotFoundPage";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <h1 className="text-center py-5">Resturant App</h1>
      <hr />
      <h2>Resturant Order</h2>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <Link role="button" className="btn btn-outline-dark" to="/">
          Add Meal
        </Link>
        <Link role="button" className="btn btn-outline-dark" to="/order">
          Add Order
        </Link>
        <Link role="button" className="btn btn-outline-dark" to="/reports">
          Reports
        </Link>
      </div>

      <Switch>
        <Route exact path="/" component={Meal} />
        <Route path="/order" component={Order} />
        <Route path="/reports" component={Reports} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
