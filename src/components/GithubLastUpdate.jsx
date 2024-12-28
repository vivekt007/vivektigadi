import React, { useEffect, useState } from "react";

// Css
import "../styles/Navbar.css";

function GithubLastUpdate() {
    const [lastUpdate, setLastUpdate] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/vivekt007/vivektigadi")
            .then((response) => response.json())
            .then((data) => {
                if (data.pushed_at) {
                    const date = new Date(data.pushed_at);
                    const formattedDate = `${String(date.getDate()).padStart(
                        2,
                        "0"
                    )}/${String(date.getMonth() + 1).padStart(
                        2,
                        "0"
                    )}/${date.getFullYear()}`;
                    setLastUpdate(formattedDate);
                }
            })
            .catch((error) =>
                console.error("Error fetching GitHub data:", error)
            );
    }, []);

    return (
        <div className="github-last-update">
            {lastUpdate ? <p>Last updated: {lastUpdate}</p> : <p>Loading...</p>}
        </div>
    );
}

export default GithubLastUpdate;
