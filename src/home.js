import React from "react";
import {BrowserRouter,Routes,Route,Link}

function App() {
    <nav style={{ display: "flex"}, padding = '20px', backgroundColor: "#f0f0fo"}>
    <Link to="/">Home</Link>
    <Link to="/about">about</Link>
    <Link to="/contact">contact</Link>

    </nav>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact"element={<Contact/>}
    </Routes>


function Home() {
    return <h1>Welcome</h1>

}

function About() {
    return <h1>About us</h1>

}

function Contact() {
    return <h1>Contact Details</h1>

}

export default App