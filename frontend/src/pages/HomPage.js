import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout'
import AddUserInfo from './AddUserInfo'
import UserSectorInfo from './UserSectorInfo';

const HomPage = () => {
  const { id } = useParams();
  const [userInfoData, setUserInfoData] = useState([])

  const [user, setUser] = useState("")

  useEffect(() => {
    getUserInfos()
      const data = localStorage.getItem('auth')
      console.log("data", data);
      const LoginUser = (JSON.parse(data))
      setUser(LoginUser?.user?._id)
  }, [])

  const getUserInfos = async () => {
    const { data } = await axios.get(`/userInfo/userInfos`)
    setUserInfoData(data)
}


  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <AddUserInfo id={id} getUserInfos={getUserInfos} />
          </div>
          <div className="col-md-6 col-sm-12">
            <UserSectorInfo userInfoData={userInfoData}  user={user} getUserInfos={getUserInfos} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomPage