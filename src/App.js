import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import WatchVideo from './components/WatchVideo';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element: <MainComponent/>
      },
      {
        path:"/watch",
        element: <WatchVideo/>
      }
    ]
  }
])

function App() {
  return(
    <Provider store={store}>
      
        <Header/>

        <RouterProvider router={appRouter}/>
    
      
    </Provider>
  );
}

export default App;
