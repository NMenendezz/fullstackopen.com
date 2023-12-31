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

const mostLike = (blogs) => {
  let authorWithMostLikes = {};
  blogs.forEach((blog) => {
    if (blog.author in authorWithMostLikes) {
      authorWithMostLikes[blog.author] += blog.likes;
    } else {
      authorWithMostLikes[blog.author] = blog.likes;
    }
  });

  const maxValue = Math.max(...Object.values(authorWithMostLikes));
  const maxIndex = Object.keys(authorWithMostLikes).find(
    (key) => authorWithMostLikes[key] === maxValue
  );

  return {
    author: maxIndex,
    likes: maxValue,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLike
};
