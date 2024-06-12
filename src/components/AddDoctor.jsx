import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddDoctor = () => {
    const [data,setData] = useState(
        {
            "doctorid":"",
            "doctorname":"",
            "specialization":"",
            "mobno":"",
            "email":"",
            "address":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)

        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully added")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch().finally()
    }
    
  return (
    <div>
        <NavBar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">DoctorId</label>
                                <input type="text" className="form-control" name='doctorid' value={data.doctorid} onChange={inputHandler} />
                            </div>

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">Doctor Name</label>
                                <input type="text" className="form-control"name='doctorname'value={data.doctorname} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">Address</label>
                                <textarea name="address" id="" className="form-control" value={data.address}onChange={inputHandler}></textarea>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">Specialisation</label>
                               <select name="specialization" id="" className="form-control" value={data.specialization}onChange={inputHandler}>
                                <option value="gynaecology">gynaecology</option>
                                <option value="pediatrics">pediatrics</option>
                                <option value="nuerology">nuerology</option>
                               </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">MobileNo </label>
                                <input type="text" className="form-control"name='mobno'value={data.mobno} onChange={inputHandler} />


                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">email</label>
                                <input type="text" className="form-control" name='email'value={data.email}onChange={inputHandler} />

                            </div>
                           
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-success" onClick={readValue}>SUBMIT</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddDoctor