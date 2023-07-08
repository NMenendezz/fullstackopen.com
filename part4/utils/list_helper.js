const dummy = () => 1;

const totalLikes = (blogs) => {
  const reducer = (sum, item) => sum + item.likes;
  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  const likes = blogs.map((blog) => blog.likes);
  const blog = blogs[likes.indexOf(Math.max(...likes))];
  return blog;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
