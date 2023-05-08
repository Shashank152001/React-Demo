import React, { useState, useEffect,useContext } from "react";
import "./Profile.css";
import { Link} from "react-router-dom";
import "primeicons/primeicons.css";
import { ProfileFormData } from "../../Service/ProfileService";
import { fetchSkills } from "../../Service/SkillService";

import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../../Context/LoginContext";

function GetProfile() {

  const{profileformdata,setProfileFormdata}=useContext(LoginContext)
  const[profileFormData,setProfileFormData]=useState(null)
  const [skilldata, setSkillData] = useState([]);
  

  // Profile Get Data
  useEffect(() => {
    ProfileFormData()
      .then((data) => {
        setProfileFormdata({name:data[0].profile.name,profileImage:data[0].profile.profileImage,userId:data[0].profile.userId})
        setProfileFormData(data[0].profile);   
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  useEffect(() => {
    fetchSkills().then((data) => {
      
      setSkillData(data[0]);
    });
  }, []);

  
  return (
    <>
    
          <div
            className="right-sidebar"
            style={{
              // position: "absolute",
              width: "100%",
              height: "100%",
              right: "0",
            }}
          >
          
         
            <div className="container">
            
           
              <div className="row">
                <div className="col-md-12">
                  <img
                    className="profile-img"
                    name="image"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={
                      profileformdata.profileImage
                    }
                    alt=""
                    
                  />
                  <label
                    htmlFor=""
                    className="d-flex justify-content-center mt-3 fs-5"
                  >
                    {profileformdata ? profileformdata.name : ""}
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <Link
                    className="text-decoration-none text-dark"
                    to="/dashboard/profile"
                  >
                    <p className="text-end me-4">Edit Profile</p>
                  </Link>
                  
                </div>
              </div>

              <div className="row mt-4">
                <div
                  className="col-md-5 ms-4 me-5 p-3 rounded-2 shadow"
                  style={{ height: "100%" }}
                >
                  <h4 className="text-dark">User Details</h4>
                  <div className="d-flex p-2">
                    <label htmlFor="" className="fw-bolder fs-5">
                      HRMID:
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-4 fs-5"
                      value={profileFormData?.hrmid || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-4 fs-5"
                      value={profileformdata?.name || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Email
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-4 fs-5"
                      value={profileFormData?.email || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Phone
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-4 fs-5"
                      value={profileFormData?.phone || ''}
                    />
                  </div>
                </div>
                <div className="col-md-5 me-4 ms-5 p-3 rounded-2 shadow">
                  <h4>Work Information</h4>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Reporting Manager
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-4 fs-5"
                      value={profileFormData?.reportingManager || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Location
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-4 fs-5"
                      value={profileFormData?.location || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Joining date
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-4 fs-5"
                      value={profileFormData?.joiningDate || ''}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-5 ms-4 me-5 p-3 rounded-2 shadow">
                  <h4 className="text-dark">Other Details</h4>
                  <div className=" p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Emercency Number:
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-2 fs-5"
                      value={profileFormData?.emergencyPhone || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Pernament Address
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-2 fs-5"
                      value={profileFormData?.permanentAddress || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      City
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-2 fs-5"
                      value={profileFormData?.city || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      State
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className="ms-2 fs-5"
                      value={profileFormData?.state || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Country
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white",width:'100%' }}
                      className="ms-2 fs-5"
                      value={profileFormData?.country || ''}
                    />
                  </div>
                </div>
                <div className="col-md-5 me-4 ms-5 p-3 rounded-2 shadow">
                  <h4>Skills</h4>
                  <div className=" p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      PrimarySkills:
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white",width:'100%' }}
                      className=" fs-5 "
                      value={skilldata?.primarySkills || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      SecondarySkills:
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white",width:'100%' }}
                      className="fs-5 "
                      value={skilldata?.secondarySkills || ''}
                    />
                  </div>
                  <div className="p-2 d-flex ">
                    <label htmlFor="" className="fw-bolder fs-5">
                      Certification:
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      style={{ border: "none", backgroundColor: "white" }}
                      className=" fs-5"
                      value={skilldata?.certifications || ''}
                    />
                  </div>
                </div>
              </div>
              
            </div>
            
          </div> 
    </>
  );
}
export default GetProfile;
