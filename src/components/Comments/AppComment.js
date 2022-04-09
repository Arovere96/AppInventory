import Comments from "./comments/Comments";
import "./AppComment.css";
const AppComment = () => {
  return (
    <div>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default AppComment;
