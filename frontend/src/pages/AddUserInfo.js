import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUserInfo = ({id, getUserInfos}) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [degree, setDegree] = useState("")
    const [user, setUser] = useState("")
    const [singleUserInfo, setSingleUserInfo] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('auth')
        const LoginUser = (JSON.parse(data))
        setUser(LoginUser?.user?._id)

        if (id) {
            getSingleUserInfos()
        }
    }, [id])



    const getSingleUserInfos = async () => {
        const { data } = await axios.get(`/userInfo/userInfos/${id}`)
        setName(data.name)
        setAge(data.age)
        setDegree(data.degree)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (name === '') {
                toast.error("Name not be empty")
            } else if (age === '') {
                toast.error("age not be empty")
            } else if (degree === '') {
                toast.error("Enter Degree")
            } else {
                if(id){
                    const { data } = await axios.put(`/userInfo/updateUserInfos/${id}`, {
                        name, age, degree, user
                    })
                    toast.success('Updated Successfully')
                    setName('')
                    setAge('')
                    setDegree('')
                    setSingleUserInfo('')
                    getUserInfos()
                    setTimeout(() => navigate("/"), 1000);
                }else{
                    const { data } = await axios.post(`/userInfo/userInfos`, {
                        name, age, degree, user
                    })
                    toast.success('Added Successfully')
                    getUserInfos()
                    setName('')
                    setAge('')
                    setDegree('')
                    setTimeout(() => navigate("/"), 1000);
                }
            }
        } catch (error) {
            toast.error(error.response.data)
        }
    }

    return (
        <div className='mt-5 shadow rounded bg-light p-4'>
            <form >
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="name" value={name} className="form-control" onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="age" value={age} className="form-control" onChange={(e) => setAge(e.target.value)} aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Degree</label>
                    <input type="degree" value={degree} className="form-control" onChange={(e) => setDegree(e.target.value)} aria-describedby="emailHelp" />
                </div>

                <div className='d-flex flex-row'>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        {id ? 'Update' : 'Save'}
                    </button>
                </div>
            </form>
        </div>

    )
}

export default AddUserInfo
