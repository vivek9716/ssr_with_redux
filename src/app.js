import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './pages/homePageComponent';
import Subpage from './pages/subPageComponent';
import {Link} from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <div>
                <div>
                     <Link to="/">Home</Link>
                     <Link to="/subpage">Subpage</Link>
                 </div>
                 <Switch>
                    
                 <Route path="/subpage" render={props=>(
                     <Subpage {...props}/>
                 )}/>
                  <Route path="/" render={props=>(
                     <Home {...props}/>
                 )}/>
            </Switch>  
            </div>
              
        )
    }

}
export default App;