import React from 'react';
import profile from './profile.jpg';
import './project.css';
import { AiOutlineDown,AiOutlineSwap } from "react-icons/ai";
import { IoCalendarNumberOutline } from "react-icons/io5";



function MyProject() {

  return (
    <section className='project-container'>

        <div className='project-heading'>
            <div><h1 style={{fontSize:"2rem"}}>My Projects</h1></div>
            <div style={{display:'flex'}}>
                <AiOutlineSwap className='rotate-90'/>
                <button className='sort-button' style={{border:'none'}}>Sort<AiOutlineDown className='arrow-down'/></button>
            </div>
        </div>
        <div className='project-content'>
            <table>
                <thead>
                <tr id='table-heading'>
                    <th>Project Name</th>
                    <th>Assigned on</th>
                    <th>To be submitted on</th>
                    <th>Status</th>
                    <th>Team</th>
                    <th>Team Head</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>E-Commerce</td>
                    <td><span className='project-date'><IoCalendarNumberOutline className='calender'/>01-03-2023</span></td>
                    <td><span className='project-date'><IoCalendarNumberOutline className='calender'/>01-03-2023</span></td>
                    <td>
                        <span className='dot'></span>
                        <span className='status'>In Progress</span>
                    </td>
                    <td className='team-members' id="team">
                        <p className='image-container'>
                            <img src={profile} alt="team-member"/>
                        </p>
                        <p className='image-container img-2'>
                            <img src={profile} alt="team-member"/>
                        </p>
                        <p className='image-container img-3'>
                            <span className='count-member'>2+</span>
                        </p>
                    </td>
                    <td>
                        <div className='lead'>
                        <p className='image-container ' id="team-lead">
                            <img src={profile} alt="team-member"/>
                        </p>
                         <span className='lead-name' style={{fontSize:'0.8rem'}}>Karuna Yadav</span>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>E-Commerce</td>
                    <td><span className='project-date'><IoCalendarNumberOutline className='calender'/>01-03-2023</span></td>
                    <td><span className='project-date'><IoCalendarNumberOutline className='calender'/>01-03-2023</span></td>

                    <td>
                        <span className='dot'></span>
                        <span className='status'>In Progress</span>
                    </td>
                    <td className='team-members' id="team">
                        <p className='image-container'>
                            <img src={profile} alt="team-member"/>
                        </p>
                        <p className='image-container img-2'>
                            <img src={profile} alt="team-member"/>
                        </p>
                        <p className='image-container img-3'>
                            <span className='count-member'>2+</span>
                        </p>
                    </td>
                    <td>
                        <div className='lead '>
                        <p className='image-container bottom-0' id="team-lead">
                            <img src={profile} alt="team-member"/>
                        </p>
                         <span className='lead-name' style={{fontSize:'0.8rem'}}>Karuna Yadav</span>
                        </div>
                    </td>
                </tr>
                
                </tbody>
            </table>

        </div>

    </section>
  )

}

export default MyProject;