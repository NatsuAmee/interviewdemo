import React, { useEffect, useState } from 'react'
import customerAPI from '../api/customerAPI';
import UserTable from './UserTable'
import {  Link  } from 'react-router-dom'

const UserTableCard = () => {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await customerAPI.getAll();
        setCustomers(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCustomer()
  },[])

  return (
    <div className='shadow-lg w-10/12 my-6 h-5/6 bg-white rounded-lg overflow-auto'>
      <div className='px-5 py-5 grid grid-cols-2 items-center'>
        <div className='text-xl font-semibold text-zinc-600 '>
          Danh Sách Khách Hàng
        </div>
        <div className='justify-self-end'>
          <div className="bg-emerald-500 px-3 py-2 rounded-lg font-semibold shadow-sm text-white "><Link to='/edit'>Thêm khách hàng</Link></div>
        </div>
      </div>
      <div className='py-2'>
        <UserTable customers={customers}/>
      </div>
    </div>
  )
}

export default UserTableCard