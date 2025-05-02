import React from "react";
import { useState } from "react";
import axios from "axios";
const EditContact = ({ setOpen, selectedContact, setContacts}) => {
    const [formData, setFormData] = useState({
        name: selectedContact.name,
        email: selectedContact.email,
        phoneNumber: selectedContact.phoneNumber,
        description: selectedContact.description,
        favorite: selectedContact.favorite,
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
        axios.put(`http://localhost:8081/contact/update/${selectedContact.id}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            console.log(res.data);
            setContacts((prevContacts) =>
                prevContacts.map((contact) =>
                    contact.id === selectedContact.id ? { ...contact, ...formData } : contact
                )
            );
        }).catch((err) => {
            console.log("some error", err);
        });

        setOpen(false)

    };

    return (
        <div className="fixed top-20 left-1 right-1 flex items-center justify-center z-50 opacity-100">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-2xl w-full p-5">
                <div className="flex justify-between border-b pb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedContact.name}</h3>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                    >
                        ✕
                    </button>
                </div>
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
        </div>
    )
}
export default EditContact;