import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import customerAPI from '../api/customerAPI'
import { Link } from 'react-router-dom'

const UserForm = () => {

    const formik = useFormik({
        initialValues: {
            customer_type_id: "1",
            name: '',
            identity: '',
            province_id:'89',
            district_id:'886',
            ward_id:'30337',
            department_id:'1',
            nation_id:"242",
            gender_id: 1,
            customer_categories_id: 1,
        },
        onSubmit: (values) => {
            const fetch = async () => {
                try {
                    console.log(values)
                    const response = await customerAPI.addCustomer(values);
                    console.log(response.status);
                } catch (error) {
                    console.log(error)
                }
            }
            fetch()
        }
    }
    )

    const options = [
        { id: 1, name: 'Khách lẻ' },
        { id: 2, name: 'Khách công ty' },
        { id: 3, name: 'Khách nước ngoài' },
    ]

    const customer_categories = [
        { id: 1, name: 'Khách trong nước' },
        { id: 2, name: 'Khách nước ngoài' },
    ]

    const identity_categories = [
        { id: 1, name: 'Chứng minh nhân dân'},
        { id: 2, name: 'Căn cước công dân'},
        { id: 3, name: 'Hộ chiếu/Passport'},
        { id: 4, name: 'Giấy tờ tùy thân khác'},
    ]

    const gender = [
        { id: 1, name: 'Nam'},
        { id: 2, name: 'Nữ'},
    ]

    

    const [nations, setNations] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await customerAPI.getNations();
                setNations(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])

    const [provinces, setProvinces] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await customerAPI.getProvinces();
                setProvinces(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])

    const [wards, setWards] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await customerAPI.getWards(formik.values.district_id);
                setWards(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [formik.values.district_id])

    const [districts, setDistricts] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await customerAPI.getDistricts(formik.values.province_id);
                setDistricts(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
        // formik.values.district_id = districts[0].id
    }, [formik.values.province_id])

    const [entrys, setEntrys] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await customerAPI.getEntrys();
                setEntrys(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    }, [])

    const renderCustomersForm = () => {
        switch (formik.values.customer_type_id) {
            case "1":
                return <div className='grid grid-cols-4 gap-5'>
                    <div className='w-full'>
                        <label htmlFor='identity_categories_id'><div className='inline text-rose-600 font-bold '>*</div>Loại giấy tờ tùy thân</label>
                        <select name='identity_categories_id' className='w-full' id='identity_categories_id' defaultValue={formik.values.identity_categories_id} onChange={formik.handleChange}>
                            {
                                identity_categories.map((option) => {
                                    return <option value={option.id} key={option.id}>{option.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor='identity'><div className='inline text-rose-600 font-bold '>*</div>Mã số giấy định danh</label>
                        <input type='text' name="identity" className='w-full' id='identity' onChange={formik.handleChange} value={formik.values.identity} />
                    </div>
                    <div className='col-span-2 grid grid-cols-3 gap-5'>
                        <div className='w-full'>
                            <label htmlFor='provinces_id'>Tỉnh/TP</label>
                            <select name='province_id' className='w-full' id='provinces_id' defaultValue={formik.values.province_id} onChange={formik.handleChange}>
                                {
                                    provinces.map((option) => {
                                        return <option value={option.id} key={option.id}>{option.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className='w-full'>
                            <label htmlFor='district_id'>Quận/huyện</label>
                            <select name='district_id' className='w-full' id='district_id' defaultValue={formik.values.district_id} onChange={formik.handleChange}>
                                {
                                    districts.map((option) => {
                                        return <option value={option.id} key={option.id}>{option.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className='w-full'>
                            <label htmlFor='wards_id'>Phường/xã</label>
                            <select name='wards_id' className='w-full' id='wards_id' defaultValue={formik.values.ward_id} onChange={formik.handleChange}>
                                {
                                    wards.map((option) => {
                                        return <option value={option.id} key={option.id}>{option.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
            case "2":
                return <div className='grid grid-cols-3 gap-5'>
                    <div className='w-full'>
                        <label htmlFor='company_name'><div className='inline text-rose-600 font-bold '>*</div>Tên công ty</label>
                        <input type='text' name="company_name" className='w-full' id='company_name' onChange={formik.handleChange} value={formik.values.company_name} />
                    </div>
                    <div className='w-full'>
                        <label htmlFor='tax_num'><div className='inline text-rose-600 font-bold '>*</div>Mã số thuế</label>
                        <input type='text' name="tax_num" className='w-full' id='tax_num' onChange={formik.handleChange} value={formik.values.tax_num} />
                    </div>
                    <div className='w-full'>
                        <label htmlFor='company_address'><div className='inline text-rose-600 font-bold '>*</div>Địa chỉ công ty</label>
                        <input type='text' name="company_address" className='w-full' id='company_address' onChange={formik.handleChange} value={formik.values.company_address} />
                    </div>
                </div>
            case "3":
                return <div className='grid grid-cols-4 gap-5'>
                    <div className='w-full'>
                        <label htmlFor='entrys_id'><div className='inline text-rose-600 font-bold '>*</div>Loại giấy tờ nhập cảnh</label>
                        <select name='entrys_id' className='w-full' id='entrys_id' defaultValue={formik.values.entrys_id} onChange={formik.handleChange}>
                            {
                                entrys.map((option) => {
                                    return <option value={option.id} key={option.id}>{option.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor='identity'><div className='inline text-rose-600 font-bold '>*</div>Mã số định danh</label>
                        <input type='text' name="identity" className='w-full' id='identity' onChange={formik.handleChange} value={formik.values.identity} />
                    </div>
                    <div className='w-full'>
                        <label htmlFor='date_entry'><div className='inline text-rose-600 font-bold '>*</div>Ngày nhập cảnh</label>
                        <input type='date' name="date_entry" className='w-full' id='date_entry' onChange={formik.handleChange} value={formik.values.date_entry} />
                    </div>
                    <div className='w-full'>
                        <label htmlFor='purpose_entry'><div className='inline text-rose-600 font-bold '>*</div>Lý do nhập cảnh</label>
                        <input type='text' name="purpose_entry" className='w-full' id='purpose_entry' onChange={formik.handleChange} value={formik.values.purpose_entry} />
                    </div>
                    <div className='w-full'>
                        <label htmlFor='date_start_stay'><div className='inline text-rose-600 font-bold '>*</div>Ngày bắt đầu tạm trú</label>
                        <input type='date' name="date_start_stay" className='w-full' id='date_start_stay' onChange={formik.handleChange} value={formik.values.date_start_stay} />
                    </div>
                    <div className='w-full'>
                        <label htmlFor='date_end_stay'><div className='inline text-rose-600 font-bold '>*</div>Ngày kết thúc tạm trú</label>
                        <input type='date' name="date_end_stay" className='w-full' id='date_end_stay' onChange={formik.handleChange} value={formik.values.date_end_stay} />
                    </div>
                </div>
            default:

        }
    }

    return (
        <div className='shadow-lg w-10/12 my-6 h-5/6 bg-white rounded-lg'>
            <div className='px-5 py-5 items-center'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <label htmlFor='customer_type_id'><div className='inline text-rose-600 font-bold '>*</div>Chọn loại khách</label>
                            <select name='customer_type_id' className='w-full' id='customer_type_id' defaultValue={formik.values.customer_type_id} onChange={formik.handleChange}>
                                {
                                    options.map((option) => {
                                        return <option value={option.id} key={option.id}>{option.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            {renderCustomersForm()}
                        </div>
                        <div>
                            <div className='grid grid-cols-4 justify-items-center gap-5'>
                                <div className='w-full'>
                                    <label htmlFor='customer_categories_id'><div className='inline text-rose-600 font-bold '>*</div>Phân loại khách</label>
                                    <select name='customer_categories_id' className='w-full' id='customer_categories_id' defaultValue={formik.values.customer_categories_id} onChange={formik.handleChange}>
                                        {
                                            customer_categories.map((option) => {
                                                return <option value={option.id} key={option.id}>{option.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label htmlFor='name'><div className='inline text-rose-600 font-bold '>*</div>Tên khách hàng</label>
                                    <input type='text' name="name" className='w-full' id='name' onChange={formik.handleChange} value={formik.values.name} />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor='date_of_birth'><div className='inline text-rose-600 font-bold '>*</div>Ngày sinh</label>
                                    <input type='date' name="date_of_birth" className='w-full' id='date_of_birth' onChange={formik.handleChange} value={formik.values.date_of_birth} />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor='gender_id'><div className='inline text-rose-600 font-bold '>*</div>Giới tính</label>
                                    <select name='gender_id' className='w-full' id='gender_id' defaultValue={formik.values.gender_id} onChange={formik.handleChange}>
                                        {
                                            gender.map((option) => {
                                                return <option value={option.id} key={option.id}>{option.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label htmlFor='phone'><div className='inline text-rose-600 font-bold '>*</div>Số điện thoại</label>
                                    <input type='text' name="phone" className='w-full' id='phone' onChange={formik.handleChange} value={formik.values.phone} />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name="email" className='w-full' id='email' onChange={formik.handleChange} value={formik.values.email} />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor='nation_id'><div className='inline text-rose-600 font-bold '>*</div>Quốc tịch</label>
                                    <select name='nation_id' className='w-full' id='nation_id' defaultValue={formik.values.nation_id} onChange={formik.handleChange}>
                                        {
                                            nations.map((option) => {
                                                return <option value={option.id} key={option.id}>{option.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/" className='bg-zinc-500 text-white py-2 px-3'>Home</Link>
                        <button className='py-1 px-3 bg-emerald-500 text-white' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserForm