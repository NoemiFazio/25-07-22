import Button from "./components/Button";
import AddMessage from "./components/AddMessage";
import MessageCardList from "./components/MessageCardList";
import FriendCardList from "./components/FriendCardList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__friends">
        <h1 App__friends__title>Friend List 😃</h1>
        <FriendCardList />
      </div>
      <div className="App_messages">
        <AddMessage />
        <MessageCardList />
      </div>
    </div>
  );
}

export default App;
