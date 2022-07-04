import useModal from "../../hooks/useModal"
import styles from "./ModalController.module.css"

function ModalController() {
    const [Modal, toggleModal] = useModal()

    return (
        <>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal className="bg-overlay">
                <div className={styles.content}>
                    <h3>Title</h3>
                    <button onClick={toggleModal}>Close Modal</button>
                </div>
            </Modal>
        </>
    )
}

export default ModalController
