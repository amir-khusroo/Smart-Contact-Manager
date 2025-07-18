import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const AddContact=()=> {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
    favorite: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/contact/add`, formData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then((res) => {
      
      toast.success("Contact added successfully");
      navigate('/view-contacts');
    }
    ).catch((err) => {
        console.log("some error", err);
        toast.error("Failed to add contact. Please try again.");
    }
    );
    setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        description: "",
        favorite: false,
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-center"><h2 className="text-2xl font-semibold mb-4 ">Add Contact</h2></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="favorite"
            checked={formData.favorite}
            onChange={handleChange}
            className="h-5 w-5"
          />
          <label className="font-medium">Mark as Favorite</label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-900 text-white p-2 rounded-lg hover:bg-green-950"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
}
export default AddContact;