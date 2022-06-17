const React = require('react');

function CommentView({
  commentRes, user,
}) {
  return (
    <div className="card">
      <div className="itemIncoment1">{user.user_name}</div>
      <div className="commentText">{commentRes.content}</div>
      <div className="itemIncoment2">{` ${new Date(commentRes.createdAt).getDate()}.${new Date(commentRes.createdAt).getMonth()}.${new Date(commentRes.createdAt).getFullYear()} ${new Date(commentRes.createdAt).getHours()}:${new Date(commentRes.createdAt).getMinutes()}`}</div>
    </div>
  );
}

module.exports = CommentView;
