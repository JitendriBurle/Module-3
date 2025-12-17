import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div>
      <h1>Message Card</h1><MessageCard
        title="Welcome"
        message="This is your first reusable component."
      />

      <MessageCard
        title="Props in React"
        message="Props help pass data from parent to child components."
      />

      <MessageCard
        title="Reusable Components"
        message="One component can be used multiple times with different data."
      />

      <MessageCard
        title="Good Job"
        message="You have successfully implemented props!"
      />
    </div>
  );
}

export default App;
