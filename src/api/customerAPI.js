import axiosClient from "./axiosClient"

const customerAPI = {
    async getAll() {
        const response = await axiosClient.get('/customer', {
            params: {
                department_id: '1',
            }
        })
        return response
    },

    async addCustomer(customer) {
        console.log(customer)
        const response = await axiosClient.post('/customer/store',
            customer
        )
        return response
    },

    async updateCustomer(customer) {
        const response = await axiosClient.post('/customer/edit/' + customer.id)
        return response
    },

    async removeCustomer(customer) {
        const response = await axiosClient.post('/customer/destroy/' + customer.id)
        return response
    },

    async getBirthDate() {
        const response = await axiosClient.get('/customer/get-birthday')
        return response;
    },

    async getNations() {
        const response = await axiosClient.post('/administrative_units/nations')
        return response;
    },

    async getProvinces() {
        const response = await axiosClient.post('/administrative_units/provinces')
        return response;
    },

    async getDistricts(province) {
        const response = await axiosClient.post('/administrative_units/districts',{
            province: province
        })
        return response;
    },

    async getWards(district) {
        const response = await axiosClient.post('/administrative_units/wards', {
            district: district
        })
        return response;
    },

    async getEntrys() {
        const response = await axiosClient.post('/administrative_units/entrys')
        return response;
    }
}

export default customerAPI