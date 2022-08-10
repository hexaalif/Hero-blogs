import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  // const [name, setName] = useState("tabid");
  // const [age, setAge] = useState(25);
  // const title = "welcome to the new blog";
  // const k = 3000;

  // let name = "tabid";

  // const handleclick = () => {
  //   name = "shohan";
  //   console.log(name);
  //   setName("shohan");
  //   setAge(26);
  // };

  return (
    <div>
      <Navbar></Navbar>
      <Home />
      {/* <h1>{title}</h1>
      <h3>love you {k}</h3>
      <h3>love you {"Allah"}</h3>
      <p>
        {" "}
        {name} is {age} years old{" "}
      </p>
      <button onClick={handleclick}>change Name</button> */}
    </div>
  );
}

export default App;
