import { useState, useEffect } from "react";
import styles from "./Comments.module.scss";

function Comments() {
    const [comments, setComments] = useState([]);
    const [form, setForm] = useState({ name: "", email: "", body: "" });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((res) => res.json())
            .then((data) => {
                const withTime = data.map((c) => ({
                    ...c,
                    time: "1 giờ trước",
                }));
                setComments(withTime);
            });
    }, []);

    const submit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.body) return;

        setComments([
            { ...form, id: Date.now(), time: "Vừa xong" },
            ...comments,
        ]);
        setForm({ name: "", email: "", body: "" });
    };

    return (
        <div className={styles.comments}>
            <h2>Comments</h2>

            <form onSubmit={submit} className={styles.form}>
                <input
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />
                <textarea
                    placeholder="Comment"
                    value={form.body}
                    onChange={(e) => setForm({ ...form, body: e.target.value })}
                />
                <button type="submit">Gửi</button>
            </form>

            <div className={styles.list}>
                {comments.map((c) => (
                    <div key={c.id} className={styles.item}>
                        <img
                            src={`https://ui-avatars.com/api/?name=${c.name}&background=random`}
                            alt="avatar"
                            className={styles.avatar}
                        />
                        <div className={styles.content}>
                            <p className={styles.name}>{c.name}</p>
                            <p className={styles.email}>{c.email}</p>
                            <p className={styles.body}>{c.body}</p>
                            <p className={styles.time}>{c.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comments;
