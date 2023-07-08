const lodash = require("lodash");

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

const mostBlogs = (blogs) => {
  const authorWithBlogNumber = lodash.countBy(blogs, "author");
  const maxValue = Math.max(...Object.values(authorWithBlogNumber));
  const maxIndex = Object.keys(authorWithBlogNumber).find(
    (key) => authorWithBlogNumber[key] === maxValue
  );

  return {
    author: maxIndex,
    blogs: maxValue,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
