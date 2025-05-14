import React, { useState } from 'react';

const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' }
];

const Users = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const handleSave = () => {
    setUsers(users.map((user) =>
      user.id === selectedUser.id ? selectedUser : user
    ));
    closeModal();
  };
  
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="text-center">
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.role}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for editing */}
      {showModal && selectedUser && (
  
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-xl relative">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>

      <input
        type="text"
        className="w-full mb-2 p-2 border rounded"
        value={selectedUser?.name || ''}
        onChange={(e) =>
          setSelectedUser({ ...selectedUser, name: e.target.value })
        }
      />
      <input
        type="email"
        className="w-full mb-2 p-2 border rounded"
        value={selectedUser?.email || ''}
        onChange={(e) =>
          setSelectedUser({ ...selectedUser, email: e.target.value })
        }
      />
      <input
        type="text"
        className="w-full mb-4 p-2 border rounded"
        value={selectedUser?.role || ''}
        onChange={(e) =>
          setSelectedUser({ ...selectedUser, role: e.target.value })
        }
      />

      <div className="flex justify-end gap-2">
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Users;
