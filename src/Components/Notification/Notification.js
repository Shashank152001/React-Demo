import { useState, useEffect } from 'react';
import { socket } from '../../socket';
import { updateUserNotification, updateUserAllNotifications } from '../../Service/NotificationService';
import './Notification.css';

export const Notification = ({ messages, unread, closeNotification }) => {
	const [notificationId, setNotificationId] = useState({});
	const [allReadData, setAllReadData] = useState({});
	const [notificationRead, setNotificationRead] = useState(false);
	const [allNotificationRead, setAllNotificationRead] = useState(false);

	const handleNotificationClick = (data) => {
		setNotificationId(data);
		setNotificationRead(true);
	};

	const handleAllReadClick = (data) => {
		setAllReadData(data);
		if (unread) {
			setAllNotificationRead(true);
		}
	};

	useEffect(() => {
		if (notificationRead) {
			updateUserNotification(notificationId)
				.then((data) => {
					// console.log(data);
					socket.emit('sendNotifications');
					setNotificationRead(false);
				})
				.catch((e) => {
					console.log(e.message);
				});
		}
	}, [notificationRead]);

	useEffect(() => {
		if (allNotificationRead) {
			updateUserAllNotifications(allReadData)
				.then((data) => {
					// console.log(data);
					socket.emit('sendNotifications');
				})
				.catch((e) => {
					console.log(e.message);
				});
		}
	}, [allNotificationRead]);

	return (
		<div className='notification-messages-div'>
			<div className='notification-messages-heading'>
				<span>Notifications</span>
				<i className='bi bi-x text-danger cross-icon' onClick={closeNotification}></i>
			</div>
			<div className='notification-messages'>
				{messages === undefined ? (
					<div className='no-notification-div'>
						<i className='bi bi-database-exclamation no-notification-icon'></i>
						<span>No notifications available</span>
					</div>
				) : (
					messages.map((message) => {
						return message?.status === 'unread' ? (
							<div
								className='notification-message-card unread-card'
								key={message.id}
								onClick={() => {
									handleNotificationClick({ notificationId: message.notification_id });
								}}
							>
								<span className='notification-logo-span'>
									<i className='bi bi-patch-exclamation text-primary notification-logo-icon'></i>
								</span>
								<div className='notification-content-div unread-bold'>
									<span>{message.content}</span>
									<span className='unread-bold'>
										{new Date(message.date).toLocaleString(undefined, {
											day: 'numeric',
											month: 'short',
											year: 'numeric',
											hour: '2-digit',
											minute: '2-digit'
										})}
									</span>
								</div>
							</div>
						) : (
							<div className='notification-message-card' key={message.id}>
								<span className='notification-logo-span'>
									<i className='bi bi-patch-exclamation text-primary notification-logo-icon'></i>
								</span>
								<div className='notification-content-div'>
									<span>{message.content}</span>
									<span className='notification-message-date'>
										{new Date(message.date).toLocaleString(undefined, {
											day: 'numeric',
											month: 'short',
											year: 'numeric',
											hour: '2-digit',
											minute: '2-digit'
										})}
									</span>
								</div>
							</div>
						);
					})
				)}
			</div>
			<div className='notification-messages-footer'>
				<button
					className='all-read-btn'
					onClick={() => {
						handleAllReadClick({ hrmid: messages[0].receiver });
					}}
				>
					<span className='check-icon'>
						<i className='bi bi-check2-square'></i>
					</span>
					<span>Mark All As Read</span>
				</button>
			</div>
		</div>
	);
};
