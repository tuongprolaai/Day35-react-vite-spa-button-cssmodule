import Button from "../../components/Button";
import styles from "./Buttons.module.scss";

function Buttons() {
    return (
        <div className={styles.buttons}>
            <h2>Buttons Demo</h2>

            <section>
                <h3>Basic Button</h3>
                <Button>Click me</Button>
            </section>

            <section>
                <h3>Primary Button</h3>
                <Button primary>Primary Button</Button>
            </section>

            <section>
                <h3>Link Button</h3>
                <Button href="https://google.com" target="_blank">
                    Go to Google
                </Button>
            </section>

            <section>
                <h3>Button với Size</h3>
                <div className={styles.row}>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
            </section>

            <section>
                <h3>Button với Variants</h3>
                <div className={styles.row}>
                    <Button bordered>Bordered</Button>
                    <Button rounded>Rounded</Button>
                    <Button primary rounded>
                        Primary Rounded
                    </Button>
                </div>
            </section>

            <section>
                <h3>Button với onClick</h3>
                <Button onClick={() => alert("Clicked!")}>Click Alert</Button>
            </section>

            <section>
                <h3>Disabled Button</h3>
                <Button disabled onClick={() => alert("Should not show")}>
                    Disabled Button
                </Button>
            </section>

            <section>
                <h3>Loading Button</h3>
                <Button loading onClick={() => console.log("Should not log")}>
                    Loading Button
                </Button>
            </section>

            <section>
                <h3>Custom className</h3>
                <Button primary className={styles.custom}>
                    Custom Styled
                </Button>
            </section>

            <section>
                <h3>Button với Icon</h3>
                <Button primary>
                    <span>📧</span> Send Email
                </Button>
            </section>
        </div>
    );
}

export default Buttons;
