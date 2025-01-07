import React from "react";
import "../styles/TextStack.css";

const TextStack = () => {
    return (
        <div className="text-container">
            <div className="stack" style={{ "--stacks": 3 }}>
                <span style={{ "--index": 0 }}>VIVEK TIGADI</span>
                <span style={{ "--index": 1 }}>VIVEK TIGADI</span>
                <span style={{ "--index": 2 }}>VIVEK TIGADI</span>
            </div>
        </div>
    );
};

export default TextStack;
