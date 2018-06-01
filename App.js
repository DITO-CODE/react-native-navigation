import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

/* ReduxThunk es un middleware  */
import LoginForm from './src/components/LoginForm';
import reducers from './src/reducers';
import Router from './src/Router';


class App extends Component {

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyChw4ZYW8Xn9MT8qwH0y1l8kAwWVDFBp4w",
      authDomain: "contacts-1922c.firebaseapp.com",
      databaseURL: "https://contacts-1922c.firebaseio.com",
      projectId: "contacts-1922c",
      storageBucket: "contacts-1922c.appspot.com",
      messagingSenderId: "541757310409"
    };

    firebase.initializeApp(config);

  }

  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default App;


