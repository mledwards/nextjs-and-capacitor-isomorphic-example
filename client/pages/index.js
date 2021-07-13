import React from "react";
export default function Index() {
  const [fruits, setFruits] = React.useState([]);
  // Only run on page load
  React.useEffect(async () => {
    const response = await fetch(`http://localhost:3001/api/fruits`);
    const parsedResponse = await response.json();
    setFruits([...parsedResponse]);
  }, []);

  return fruits.length > 0 ? (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit.name}</li>
      ))}
    </ul>
  ) : (
    <p>No fruits</p>
  );
}
