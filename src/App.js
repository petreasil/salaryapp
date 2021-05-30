import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Angajati from "./components/Pages/Angajati/Angajati";
import Editrecord from "./components/Pages/Editrecord/Editrecord";

function App(props) {
  console.log(props);
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/angajati/edit/:id" component={Editrecord} />
        <Route path="/angajati" component={Angajati} />
      </Switch>
    </div>
  );
}

export default App;
