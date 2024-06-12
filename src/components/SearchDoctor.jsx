import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchDoctor = () => {
    const [data, setData] = useState(
        {
            "doctorid": ""
        }
    )
    const [result, setResult] = useState(
        []
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
//delete

const deleteDoctor =(id)=>{
    let input = { "_id":id}
    axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully deleted")
                
            } else {
                alert("error")
                
            }
        }
    ).catch().finally()
}



    //serach button 

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch()

    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-control">DoctorId</label>
                                <input type="text" className="form-control" name='doctorid' value={data.doctorid} onChange={inputHandler} />
                            </div>
                            <center>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button class="btn btn-success" onClick={readValue}>SEARCH</button>
                                </div>
                            </center>
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">id</th>
                                                <th scope="col">name</th>
                                                <th scope="col">address</th>
                                                <th scope="col">specialization</th>
                                                <th scope="col">mobileno</th>
                                                <th scope="col">email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {result.map(
                                            (value,index)=>{
                                                return   <tr>
                                                <td>{value.doctorid}</td>
                                                <td>{value.doctorname}</td>
                                                <td>{value.address}</td>
                                                <td>{value.specialization}</td>
                                                <td>{value.mobno}</td>
                                                <td>{value.email}</td>
                                               
                                               <td>
                                                <button class="btn btn-danger"onClick={()=>{deleteDoctor(value._id)}}>DELETE</button>
                                               </td>
                                            </tr>
                                            }
                                           )}
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchDoctor