import React from 'react'
import { Link } from 'react-router-dom'

const UserTable = ({customers}) => {
    return (
        <div className='overflow-hidden rounded-sm'>
            <div className='overflow-x-auto'>
                <table className='border-collapse table-auto w-full px-5'>
                    <thead className='text-center text-zinc-600 border-b border-zinc-300'>
                        <tr>
                            <th className='font-semibold px-3 py-1 border-y border-r border-zinc-300'>ID</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Loại khách</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Loại giấy tờ tùy thân</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Mã số giấy định danh</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Tỉnh/TP</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Quận/Huyện</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Phường/Xã</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Phân loại Khách</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Tên khách hàng</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Ngày Sinh</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Giới tính</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Số điện thoại</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Email</th>
                            <th className='font-semibold px-3 py-1 border border-zinc-300'>Quốc tịch</th>
                            <th className='font-semibold px-3 py-1 border-y border-l border-zinc-300'>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => {
                            return <tr key={customer.id} className={`${index % 2 !== 0 ? "bg-zinc-100" : ""}`}>
                                <td className='px-3 py-2'>{customer.id}</td>
                                <td className='px-3 py-2'>{customer.customertype}</td>
                                <td className='px-3 py-2'>{customer.identitys}</td>
                                <td className='px-3 py-2'>{customer.identity}</td>
                                <td className='px-3 py-2'>{customer.province}</td>
                                <td className='px-3 py-2'>{customer.district}</td>
                                <td className='px-3 py-2'>{customer.ward}</td>
                                <td className='px-3 py-2'>{customer.customer_categories}</td>
                                <td className='px-3 py-2'>{customer.name}</td>
                                <td className='px-3 py-2'>{customer.date_of_birth}</td>
                                <td className='px-3 py-2'>{customer.gender_name}</td>
                                <td className='px-3 py-2'>{customer.phone}</td>
                                <td className='px-3 py-2'>{customer.email}</td>
                                <td className='px-3 py-2'>{customer.nation}</td>
                                <td className='px-3 py-2'>
                                    <div className='flex gap-1'>
                                        <div className='bg-amber-600 px-3 py-2 rounded-lg font-semibold shadow-sm text-white'>
                                            <Link to='/edit'>Chỉnh sửa</Link>
                                        </div>
                                        <div className='bg-rose-500 px-3 py-2 rounded-lg font-semibold shadow-sm text-white'>
                                            <Link to='/edit'>Xóa</Link>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default UserTable