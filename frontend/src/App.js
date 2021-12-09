import { Redirect, Route, Switch } from "react-router-dom";
import Layout from './components/UI/Layout/Layout';
import MainPage from "./containers/MainPage/MainPage";
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state => state.users.user);

  // const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  //   return isAllowed ?
  //     <Route {...props} /> :
  //     <Redirect to={redirectTo} />
  // };

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          {/* <ProtectedRoute
            isAllowed={user}
            path="/chat"
            exact
            component={MainPage}
          /> */}
        </Switch>
      </Layout>
      <Route path="/login"  component={Login} />
      <Route path="/register" component={Register} />
    </>
  );
}

export default App;
