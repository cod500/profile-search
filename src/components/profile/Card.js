import React from 'react';
import '../../styles/profile.css';
import { FiTrash2 } from "react-icons/fi";


export default function Card({ first, last, job, image, email, removeProfile }) {
    return (
        <div className="profile-card">
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <div className="profile-name">
                <h4>Name: {first} {last}</h4>
                <p>Email: {email}</p>
            </div>
            <div className="profile-delete">
                <FiTrash2 size={20} onClick={removeProfile} className="trash-icon" />
            </div>

        </div >
    )
}
