import { animated, easings, useTransition } from "@react-spring/web"
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
    const transitions = useTransition(visible, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        // reverse: visible,
        // delay: 200,
        config: {
            duration: 300,
            easing: easings.easeInOutQuart,
        },
        // onRest: () => setVisible((prev) => !prev),
    })

    const Modal = ({ children, onClick, style, ...rest }: ModalProps) => {
        return transitions(
            (styles, item) =>
                item &&
                createPortal(
                    <animated.div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            zIndex: 100,
                            ...style,
                            ...styles,
                        }}
                        {...rest}
                        onClick={(e) => {
                            e.currentTarget === e.target && toggleModal()
                            onClick && onClick(e)
                        }}
                    >
                        {children}
                    </animated.div>,
                    document.querySelector("#modal-root")!
                )
        )
    }

    const toggleModal = () => setVisible(!visible)

    return [Modal, toggleModal, visible] as [
        (props: ModalProps) => React.ReactPortal | null,
        () => void,
        boolean
    ]
}
