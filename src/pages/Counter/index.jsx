import { useState } from "react";
import styles from "./Counter.module.scss";

function Counter() {
    const [count, setCount] = useState(0);

    const getColor = () => {
        if (count > 0) return styles.positive;
        if (count < 0) return styles.negative;
        return styles.zero;
    };

    const getStatus = () => {
        if (count > 0) return "Dương";
        if (count < 0) return "Âm";
        return "Bằng không";
    };

    return (
        <div className={styles.counter}>
            <h1 className={getColor()}>{count}</h1>
            <p>{getStatus()}</p>

            <div className={styles.buttons}>
                <button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setCount(count - 1)}>-1</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
