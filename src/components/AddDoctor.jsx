import React from 'react'

const AddDoctor = () => {
  return (
    <div>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">DoctorId</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">Doctor Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">Address</label>
                                <textarea name="" id="" className="form-control"></textarea>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">Specialisation</label>
                               <select name="" id="" className="form-control">
                                <option value="gynaecology">gynaecology</option>
                                <option value="pediatrics">pediatrics</option>
                                <option value="nuerology">nuerology</option>
                               </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="form-label">MobileNo </label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="form-label">email</label>
                                <input type="text" className="form-control" />

                            </div>
                           
                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button class="btn btn-success">SUBMIT</button>
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