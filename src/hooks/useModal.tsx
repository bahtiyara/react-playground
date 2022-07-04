import { useState } from "react"
import { createPortal } from "react-dom"

type ModalProps = {
    children?: any
    onClick?: React.MouseEventHandler<HTMLDivElement>
    style?: React.CSSProperties
    className?: string
}

export default function useModal() {
    const [visible, setVisible] = useState(false)

    const Modal = ({ children, onClick, style, ...rest }: ModalProps) => {
        if (!visible) return null

        return createPortal(
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 100,
                    ...style,
                }}
                {...rest}
                onClick={(e) => {
                    e.currentTarget === e.target && toggleModal()
                    onClick && onClick(e)
                }}
            >
                {children}
            </div>,
            document.querySelector("#modal-root")!
        )
    }

    const toggleModal = () => setVisible(!visible)

    return [Modal, toggleModal] as [
        (props: ModalProps) => React.ReactPortal | null,
        () => void
    ]
}
