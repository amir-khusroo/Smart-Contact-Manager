import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
const API_URL = import.meta.env.VITE_API_URL;

const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        axios.get(`${API_URL}/protected`, {
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
