import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
  state = {
      friends: [] 
  }

componentDidMount() {
    this.getData();
    if (!sessionStorage.getItem('token')) {
        console.error("Not Logged In");
    } else {
        console.info("Logged In");
    }
}

getData = () => {
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(response => console.log(response))
};

}

export default Friends;