import * as React from "react";

const App: React.FC = () => {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    testFetch();
  }, [message]);

  const testFetch = () => {
    fetch("/api/test")
    .then( res => res.json())
    .then(({msg}) => setMessage(msg));
  };

  return (
    <main>
      <h1>App</h1>
      <p>{message}</p>
    </main>
  );
};

export default App;

