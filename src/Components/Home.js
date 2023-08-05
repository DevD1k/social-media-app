import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../Redux/postSlice";
import { showDetails } from "../Redux/detailSlice";
import Navbar from "./Navbar";

export default function Home() {
  const { isLoading, posts, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    function () {
      dispatch(fetchPosts());
    },
    [dispatch]
  );

  function handleCardDetails(post) {
    dispatch(showDetails(post));
    navigate(`/details/${post.id}`);
  }
  console.log(posts);
  return (
    <>
      <Navbar active={"home"} />
      {isLoading && <h1>Data is loading...</h1>}
      {!isLoading && error && <h1>Some error</h1>}
      {!isLoading && !error && (
        <div className="home-container">
          {posts &&
            posts.map((post) => (
              <div
                className="post"
                key={post.id}
                onClick={() => handleCardDetails(post)}
              >
                <div className="img-container">
                  <img
                    src={`https://picsum.photos/200?random=${post.id}`}
                    alt=""
                  />
                </div>
                <h3>Title: {post.title.slice(0, 10)}...</h3>
                <p>Body: {post.body.slice(0, 30)}</p>
                <p>
                  <span>Read More...</span>
                </p>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
