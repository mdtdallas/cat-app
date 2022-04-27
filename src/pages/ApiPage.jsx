import { useEffect, useState } from "react";

function Shows() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/api/shows")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
          console.log(data)
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Shows</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ showID, title, location, date, council }) => (
            <li key={showID}>
              <h3>{title}</h3>
              <h3>{location}</h3>
              <h3>{date}</h3>
              <h3>{council}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Shows;
