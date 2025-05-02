import axios from "axios";
import React, { useEffect } from "react";

const Profile = () => {
    useEffect(() => {
        // Get token from localStorage
        const token = localStorage.getItem("token");

        // Check if token exists before making the request
        if (!token) {
            console.error("No token found. Please log in.");
            return;
        }
        console.log("Token:", token);

        // Make API request with Authorization header
        axios
            .get("http://localhost:8081/protected", {
                headers: { Authorization: `Bearer ${token}` },
                withCredentials: true,
            })
            .then((res) => {
                console.log("Profile Data:", res.data);
            })
            .catch((err) => {
                console.error("Error fetching profile:", err.response?.data || err.message);
                window.location.href = "/login";
            });
    }, []);

    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
};

export default Profile;
