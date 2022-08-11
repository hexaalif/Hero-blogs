import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:4000/blogs/${id}`);

  const handleDelete = () => {
    fetch(`http://localhost:4000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {blog && (
        <Card
          sx={{
            maxWidth: 345,
            m: 2,
            bgcolor: "#379683",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={blog.picture}
              alt="green iguana"
            />
            <CardContent sx={{ color: "#EDF5E1" }}>
              <Typography gutterBottom variant="h4" component="div">
                {blog.title}
              </Typography>
              <Typography variant="h5">
                <i>Written by {blog.author}</i>
              </Typography>
              <Typography variant="body2">
                <i>{blog.body}</i>
              </Typography>
              <Button
                onClick={() => handleDelete(blog.id)}
                variant="outlined"
                sx={{ bgcolor: "#05386B", color: "white", mt: 3 }}
              >
                Delete Blog
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default BlogDetails;
