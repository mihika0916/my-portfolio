function WritingCard({ post }) {
  return (
    <article className="writing-card">
      <p>{post.date}</p>
      <h3>{post.title}</h3>
      <span>{post.excerpt}</span>
    </article>
  );
}

export default WritingCard;
