import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

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
        sx={{
          my: 2,
          display: "grid",
          spacing: "4",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {blogs.map((blog) => (
          <div key={blog._id}>
            <Link style={{ textDecoration: "none" }} to={`/blog/${blog._id}`}>
              <Card
                sx={{
                  maxWidth: 345,
                  m: 2,
                  bgcolor: "#379683",
                }}
              >
                <CardActionArea>
                  <CardContent sx={{ color: "#EDF5E1" }}>
                    <Typography gutterBottom variant="h7" component="div">
                      <h2>{blog.title}</h2>
                    </Typography>
                    <Typography variant="body2">
                      <i>Written by {blog.author}</i>
                    </Typography>
                    {/* <Button
                    onClick={() => handleDelete(blog.id)}
                    variant="outlined"
                    sx={{ bgcolor: "#05386B", color: "white", mt: 3 }}
                  >
                    Delete Blog
                  </Button> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default BlogList;
