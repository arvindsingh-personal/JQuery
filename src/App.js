
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddBLog from "./components/addblog/AddBLog";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Blogs from "./data";
import Details from "./details/Details";
// import Home from "./home/Home";
export const BlogContext = createContext();

function App() {
  
  const [Blog,setBlog]=useState(Blogs())
  const [ID,setID] = useState(0);
  const [title, setTitle] = useState('');
  const [heading, setHeading] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  return (
    <>
      <Navbar />
      <BlogContext.Provider value={{ title, setTitle, heading, setHeading, subTitle,setSubTitle, description, setDescription,  image, setImage,ID,setID,Blog,setBlog }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/AddBLog" element={<AddBLog />} />
        </Routes>
      </BlogContext.Provider>
      <Footer />
    </>
  );
}

export default App;
