import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Index() {
  const [fruits, setFruits] = React.useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  // // Only run on page load
  // React.useEffect(async () => {
  //   const response = await fetch(`https://7a4e65298fe9.ngrok.io/api/fruits`);
  //   const parsedResponse = await response.json();
  //   setFruits([...parsedResponse]);
  // }, []);

  console.log(isAuthenticated);
  console.log(user);

  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      {isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Not registered</p>
      )}
      {fruits.length > 0 ? (
        <ul>
          {fruits.map((fruit) => (
            <li>{fruit.name}</li>
          ))}
        </ul>
      ) : (
        <p>No fruits</p>
      )}
    </div>
  );
}
