// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   createTheme,
//   Typography,
// } from "@mui/material";
// import { Container, ThemeProvider } from "@mui/system";
import React, { useState } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum....",
      id: 1,
      author: "Shohan",
    },
    { title: "Meat Party", body: "lorem ipsum....", id: 2, author: "Tabid" },
    { title: "Coming Soon", body: "lorem ipsum....", id: 4, author: "Tabid" },
    { title: "Developer Me", body: "lorem ipsum....", id: 3, author: "Sakib" },
  ]);

  //   const theme1 = createTheme({
  //     mt: 1,
  //     color: "orange",
  //     bgcolor: "warning.main",
  //   });
  return (
    <div>
      {/* <Container maxWidth="xl">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>
              <i>Written by {blog.author}</i>
            </p>
          </div>
        ))}
      </Container> */}
      {/* <ThemeProvider theme={theme1}>
        
      </ThemeProvider> */}

      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Tabid")}
        title="Tabid's blogs"
      />
    </div>
  );
};

export default Home;
