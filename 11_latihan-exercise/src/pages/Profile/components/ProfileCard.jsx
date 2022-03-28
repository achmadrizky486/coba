import React from 'react'
import styles from "./ProfileCard.module.css"

const ProfileCard = ({ user }) => {
    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={user.avatar} alt='avatar' />
            <div className={styles.content}>
                <h4>{user.first_name} {user.last_name} </h4>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default ProfileCard