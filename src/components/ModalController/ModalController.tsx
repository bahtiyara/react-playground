import { animated, useSpring } from "@react-spring/web"
import useModal from "../../hooks/useModal"
import styles from "./ModalController.module.css"

function ModalController() {
    const [Modal, toggleModal, visible] = useModal()
    const style = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 48 : 24,
    })

    return (
        <>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal className="bg-overlay">
                <animated.div className={styles.content} style={style}>
                    <h3>Title</h3>
                    <button onClick={toggleModal}>Close Modal</button>
                </animated.div>
            </Modal>
        </>
    )
}

export default ModalController
