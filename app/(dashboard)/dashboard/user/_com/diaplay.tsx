'use client'

import { User } from '@prisma/client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface UsersTableProps {
  orgId: string;
}

function UsersTable({ orgId }: UsersTableProps) {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(`/api/users/${orgId}`);
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [orgId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <p className="text-gray-500 text-lg">Loading users...</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto w-full p-4">
      <table className="min-w-full divide-y divide-black bg-black shadow-md rounded-lg">
        <thead className="bg-black">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Name
            </th>
            <th
       
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase text-[16px] tracking-wider"
            >
              Registered Users Email
            </th>
          </tr>
        </thead>
        <tbody className="bg-black divide-y divide-black">
          {users && users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
