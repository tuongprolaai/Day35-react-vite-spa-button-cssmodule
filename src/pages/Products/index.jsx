import { useState, useEffect } from "react";
import styles from "./Products.module.scss";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function Products() {
    const [posts, setPosts] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then(setPosts);
    }, []);

    if (posts.length === 0) return <p className={styles.loading}>Loading...</p>;

    return (
        <div className={styles.products}>
            <h2>Danh sách bài viết</h2>

            <div className={styles.list}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.card}>
                        <span className={styles.id}>#{post.id}</span>
                        <h3>{capitalize(post.title)}</h3>
                        <p>
                            {post.body.length > 100
                                ? post.body.slice(0, 100) + "..."
                                : post.body}
                        </p>
                        <button onClick={() => setSelected(post)}>
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>

            {selected && (
                <div
                    className={styles.overlay}
                    onClick={() => setSelected(null)}
                >
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>{capitalize(selected.title)}</h2>
                        <p>{selected.body}</p>
                        <button onClick={() => setSelected(null)}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
