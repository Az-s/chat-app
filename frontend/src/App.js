import { Grid } from '@mui/material';
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from './components/UI/Layout/Layout';
import Chat from './containers/Chat/Chat';
import Users from './containers/Users/Users';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Grid container spacing={2}>
          <Grid container mt={5}>
            <Grid item xs={4} >
              <Users />
            </Grid>
            <Grid item xs={8} >
              <Chat />
            </Grid>
          </Grid>
        </Grid>
        {/* <Route path="/" exact component={Products}/> */}
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Layout>
  );
}

export default App;
