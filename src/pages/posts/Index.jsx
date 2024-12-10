import { useEffect, useState } from "react";
import axios from "axios";

function Index() {
  const [posts, setPosts] = useState();

  function fetchPosts() {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchPosts;
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="container">
            <h1>I tuoi post</h1>
          </div>
          <div className="container">{posts}</div>
        </section>
      </main>
    </>
  );
}

export default Index;
