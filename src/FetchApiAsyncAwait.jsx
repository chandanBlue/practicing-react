import React, { useEffect, useState } from "react";

const FetchApiAsyncAwait = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then(
      (response) =>
        response.json().then((actualData) => console.log(actualData))
    );
  }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      });
  }, []);
  return (
    <div>
      Data from API
      <ul>
        {data.map((item) => (
          <li key={item.id}> Title : {item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApiAsyncAwait;
