// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   createTheme,
//   Typography,
// } from "@mui/material";
// import { Container, ThemeProvider } from "@mui/system";
import { Container } from "@mui/system";
import BlogList from "../BlogList/BlogList";
import useFetch from "../useFetch/useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:4000/blogs");

  //   const theme1 = createTheme({
  //     mt: 1,
  //     color: "orange",
  //     bgcolor: "warning.main",
  //   });

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

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
      <Container>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} key={blogs._id} title="All Blogs!" />}
      </Container>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Tabid")}
        title="Tabid's blogs"
      /> */}
    </div>
  );
};

export default Home;
