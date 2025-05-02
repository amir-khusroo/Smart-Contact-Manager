import axios from "axios";
import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ViewPericularContact from "./ViewPerticularContact";
import EditContact from "./EditContact";

const ViewContact = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [editOpen,setEditOpen]=useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/contact/getAll", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setContacts(res.data);
    }).catch((error) => console.error("Error fetching contact data:", error));
  }, []);

  const deleteContact = (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return;
    }
    axios.delete(`http://localhost:8081/contact/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      console.log(res.data);
      setContacts((contacts) => contacts.filter(contact => contact.id != id))
    }).catch((err) => {
      console.log(err.response.data);
    })
  }


  if (contacts.length === 0) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }
  const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

  const filteredContacts = sortedContacts.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.phoneNumber.includes(searchTerm)
  );



  return (
    <>
      <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${open||editOpen ? "opacity-30" : ""}`}>
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full p-2 border rounded mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 🔄 Update search term
        />
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
            <tr>

              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Link</th>
              <th className="px-6 py-3">Action</th>
              <th className="px-6 py-3">Favorite</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((user) => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center">
                  <img className="w-10 h-10 rounded-full" src={user.img} alt="profile" />
                  <div className="pl-3">
                    <div className="text-base font-semibold">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">{user.phoneNumber}</td>
                <td className="px-6 py-4 flex gap-3">
                  <i className="fa-brands fa-linkedin cursor-pointer text-xl"></i>
                  <i className="fa-solid fa-link cursor-pointer text-xl"></i>
                </td>
                <td className="px-6 py-4 ">
                  <div className="flex gap-3">
                    <i className="fa-solid fa-eye  cursor-pointer" onClick={() => { setOpen(true); setSelectedContact(user) }}></i>
                    <i className="fa-solid fa-pen  cursor-pointer" onClick={() => { setEditOpen(true); setSelectedContact(user) }}></i>
                    <i className="fa-solid fa-trash  cursor-pointer" onClick={() => deleteContact(user.id)}></i>
                  </div>
                </td>
                <td className="px-6 py-4 cursor-pointer" >
                  {
                    user.favorite == true ? <i className="fa-solid fa-heart text-red-600 text-xl"></i> : <i className="fa-regular fa-heart text-xl"></i>
                  }

                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && selectedContact && (
        <ViewPericularContact selectedContact={selectedContact} setOpen={setOpen}/>
      )}

      {editOpen && selectedContact && (
        <EditContact selectedContact={selectedContact} setOpen={setEditOpen} setContacts={setContacts} />
      )}


    </>

  );
};

export default ViewContact;
