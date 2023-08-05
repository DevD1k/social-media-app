import { useSelector } from "react-redux";
import Navbar from "./Navbar";
export default function Detail() {
  const { post } = useSelector((store) => store.details);
  return (
    <>
      <Navbar active={"det"} />
      <div className="detail-container">
        <div className="details">
          <h2>Details For Post With ID: {post.id}</h2>
          <div className="img-container">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt="" />
          </div>
          <p>User ID: {post.userId}</p>
          <h3>Title: {post.title}</h3>
          <p>Body: {post.body}</p>
        </div>
      </div>
    </>
  );
}
