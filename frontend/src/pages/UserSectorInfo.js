import React from 'react'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi';
import { HiOutlineEye } from 'react-icons/hi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const UserSectorInfo = ({userInfoData, user, getUserInfos}) => {

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`/userInfo/deleteUserInfos/${id}`);
            toast.success("Data Deleted Successfully");
            getUserInfos()
        } catch (error) {
            toast.error(error);
        }
    }
    return (
        <div className='mt-5 bg-light rounded p-4 shadow' style={{overFlow:"scroll"}}>
            <h6 className='text-center mb-2'>List of User Infos </h6>
            <div className="table-responsive">
                <table className="table caption-top">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Degree</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userInfoData && userInfoData.map(data =>
                            <tr key={data._id}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.degree}</td>
                                <td>
                                    <span className='text-success'>
                                        <HiOutlineEye />
                                    </span>
                                    {user && user === data?.user?._id && (
                                        <>
                                            <Link className='text-primary p-2' to={`/${data._id}`}>
                                                <FiEdit />
                                            </Link>
                                            <span className='text-danger' onClick={() => handleDelete(data._id)} style={{cursor:'pointer'}}>
                                                <RiDeleteBinLine />
                                            </span>
                                        </>
                                    )}
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default UserSectorInfo
