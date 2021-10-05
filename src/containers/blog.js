import React from "react";

import blog_items from "../information/blog.json";

const BlogItem = ({ item }) => {
  return (
    <div className="nice-border blog-item">
      <p>
        <strong>{item.text}</strong>
      </p>
      <div className="blog-bottom">
        <p>tags: {item.tags.join(", ")}</p>
        <p>{item.date}</p>
      </div>
    </div>
  );
};

class Blog extends React.Component {
  render() {
    return (
      <div className="center">
        <p>This is where I will write my thoughts :)</p>
        {blog_items.map((item) => (
          <BlogItem item={item}></BlogItem>
        ))}
      </div>
    );
  }
}

export default Blog;