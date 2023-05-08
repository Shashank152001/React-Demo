import React, { useState, useEffect, useContext } from 'react';
import './Dashboard.css';
import Sidebar from './sidebar';
import { LoginContext } from '../../Context/LoginContext';
import { userData } from '../../Service/DashboardService';
import Loader from '../Spinner/Loader';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { ProfileFormData } from '../../Service/ProfileService';

function MyDashBoard() {
	const [userDatas, setUserDatas] = useState(null);

	const { profileformdata, setProfileFormdata } = useContext(LoginContext);

	useEffect(() => {
		userData()
			.then((data) => {
				setUserDatas(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	return (
		<section className=' main-container'>
			{userDatas ? (
				<div className='wrapper d-flex'>
					<Sidebar />
					<div className='right-sidebar'>
						<LoginContext.Provider value={{ profileformdata, setProfileFormdata }}>
							<Header />
						</LoginContext.Provider>
						<div className='right-middle-content'>
							<Outlet />
						</div>
					</div>
				</div>
			) : (
				<section style={{ height: '100vh' }}>
					<Loader />
				</section>
			)}
		</section>
	);
}

export default MyDashBoard;
