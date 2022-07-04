import { animated, easings, useSpring } from "@react-spring/web"
import useModal from "../../hooks/useModal"
import styles from "./ModalController.module.css"

function ModalController() {
    const [Modal, toggleModal, visible] = useModal()
    const style = useSpring({
        to: {
            opacity: visible ? 1 : 0,
            y: visible ? 48 : 24,
        },
        // config: {
        //     duration: 260,
        //     easing: easings.easeInOutQuart,
        // },
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
