import {  Route, Switch } from "react-router-dom";
import Layout from './components/UI/Layout/Layout';
import MainPage from "./containers/MainPage/MainPage";
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
      </Layout>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </>
  );
}

export default App;
