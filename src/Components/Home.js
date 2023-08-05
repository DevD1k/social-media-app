import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
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
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && error && <Error error={error} />}
      {!isLoading && !error && (
        <>
          <Navbar active={"home"} />
          <Search />
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
                  <p>Body: {post.body.slice(0, 50)}</p>
                  <p>
                    <span>Read More...</span>
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}

function Search() {
  return (
    <>
      <div className="search">
        <h1>Social Media For Travellers</h1>
        <div className="search-items">
          <FaSearch />
          <input type="text" placeholder={"Search here..."} />
        </div>
      </div>
    </>
  );
}

function Loader() {
  return (
    <>
      <div className="loading">
        <h1>Data Is Being Fetched Please Wait</h1>
      </div>
    </>
  );
}
function Error({ error }) {
  return (
    <div className="error">
      <h1>Some Error Occured: {error}</h1>
    </div>
  );
}
