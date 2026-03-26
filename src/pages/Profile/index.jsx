import { useState, useEffect } from "react";
import styles from "./Profile.module.scss";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then(setUser);
    }, []);

    if (!user) return <p className={styles.loading}>Đang tải...</p>;

    return (
        <div className={styles.card}>
            <h2>{user.name}</h2>
            <p className={styles.username}>@{user.username}</p>

            <div className={styles.info}>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                <p>
                    {user.address.street}, {user.address.city}
                </p>
            </div>
        </div>
    );
}

export default Profile;
