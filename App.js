import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import AddImage from "./components/AddImage";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: friends
    };
  }
  addById = (id) => {
    //filter es igual que el map
    const newImage = this.state.friends.filter((friend) => {
      push.friends()
      return id === friend.id;
    });
    //le pasamos el nuevo estado 
    this.setState({
      friends: newFriends
    })
  }
  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {
          this.state.friends.map((friend, index) => {
            return (
              <FriendCard
                image={friend.image}
                key={index}
              />
              <AddImage
              image={}
              key={index}
              />
            )
          })
        }

      </Wrapper>
    );
  }
}

export default App;
