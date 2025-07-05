import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        axios.get("http://localhost:8080/protected", {
                headers: { Authorization: `Bearer ${token}` },
                withCredentials: true,
            })
            .then((res) => {
                console.log("Profile Data:", res.data);
            })
            .catch((err) => {
                navigate("/login");
            });
    }, []);

    return (
        <div>
            <Dashboard/>
        </div>
    );
};

export default Profile;
