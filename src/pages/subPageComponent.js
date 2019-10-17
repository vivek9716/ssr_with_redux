import React from 'react';
import Planets from './Planets';

class SubPage extends React.Component{
    fetchUsers() {
        // Where we're fetching data from
        fetch(`https://jsonplaceholder.typicode.com/users`)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            this.setState({
              users: data,
              isLoading: false,
            })
          )
          // Catch any errors we hit and update the app
          .catch(error => this.setState({ error, isLoading: false }));
      }
    componentDidMount() {
        //const url = "https://api.randomuser.me/";
        //const response = await fetch(url);
        // const data = await response.json();
        // this.setState({ person: data.results[0], loading: false });
    }
    showme(){
        alert(11)
        //this.fetchUsers();
        // this.setState({ person: data.results[0], loading: false });
    }
    render(){
        //const { isLoading, users, error } = this.state;
        return (
            <div>
                <h1>
                    Sub page
                </h1>
                <p>
                    Some content
                </p>
                <div>
                <Planets/>




                </div>



                <input type="button" onClick={()=>this.showme()} name="clickme" value="clickme"/>
            </div>
        )
    }

}
export default SubPage;