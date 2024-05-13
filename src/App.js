import React, { useState } from "react";
import "./FetchApi.css";

export default function FetchApi() {
  const [posts, setPosts] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
      });
  };

  // Function to render table rows based on the posts data
  const renderTableRows = () => {
    return posts.map((post) => (
      <tr key={post.id}>
        <td>{post.userId}</td>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <br />
      <button onClick={apiGet}>FETCH</button>
      <br />
      {posts.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Post ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>For <a href="https://ente.io" target="_blank" rel="noopener noreferrer">Ente.io</a></p>
      </footer>
    </div>
  );
}
