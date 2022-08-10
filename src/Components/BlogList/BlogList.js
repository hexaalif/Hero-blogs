import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";

const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  return (
    <div>
      <Container sx={{ my: 2 }}>
        <Typography variant="h4" color="#EDF5E1">
          {title}
        </Typography>
      </Container>
      <Container
        sx={{ my: 2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Card sx={{ maxWidth: 345, mt: 2, bgcolor: "#379683" }}>
              <CardActionArea>
                <CardContent sx={{ color: "#EDF5E1" }}>
                  <Typography gutterBottom variant="h7" component="div">
                    <h2>{blog.title}</h2>
                  </Typography>
                  <Typography variant="body2">
                    <i>Written by {blog.author}</i>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default BlogList;
