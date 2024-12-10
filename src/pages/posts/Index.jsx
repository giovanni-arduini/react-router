import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";

function Index() {
  //
  const [posts, setPosts] = useState();

  function fetchPosts() {
    axios
      .get("http://localhost:3000/posts")

      .then((res) => {
        console.log(res.data);

        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <main>
        <section>
          <div className="container">
            <h1>I tuoi post</h1>
          </div>
          <div className="container"></div>
        </section>
      </main>
    </>
  );
}

export default Index;
