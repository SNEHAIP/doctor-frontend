import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData =()=>{
       axios.post("http://localhost:8080/view") .then(
        (response)=>{
            changeData(response.data)
        }
       ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">DoctorId</th>
                                    <th scope="col">DoctorName</th>
                                    <th scope="col">Specialization</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">MobileNo</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                              {data.map(
                                (value,index)=>{
                                    return    <tr>
                                    <th scope="row">{value.doctorid}</th>
                                    <td>{value.doctorname}</td>
                                    <td>{value.specialization}</td>
                                    <td>{value.address}</td>
                                    <td>{value.mobno}</td>
                                    <td>{value.address}</td>
                                </tr>
                                }
                              )

                              }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll