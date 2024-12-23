import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./webPages/Home.jsx";
import IVariRevamp from "./webPages/IVariRevamp.jsx";
import IVariHRMS from "./webPages/IVariHRMS.jsx";
import StonePaper from "./webPages/StonePaper.jsx";
import GetmyJobs from "./webPages/Getmyjobs.jsx";
import IvariHRMS from "./webPages/IVariHRMS.jsx";

function App() {
    const [count, setCount] = useState(0);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-screen">
                <div className="loader">
                    <p>loading&thinsp;</p>
                    <div className="words">
                        <span className="word">buttons</span>
                        <span className="word">forms</span>
                        <span className="word">images</span>
                        <span className="word">links</span>
                        <span className="word">buttons</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Router // This is the important part
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/iVariRevamp" element={<IVariRevamp />} />
                <Route path="/iVariHRMS" element={<IvariHRMS />} />
                <Route path="/stonepaper" element={<StonePaper />} />
                <Route path="/getmyjobs" element={<GetmyJobs />} />
            </Routes>
        </Router>
    );
}

export default App;
