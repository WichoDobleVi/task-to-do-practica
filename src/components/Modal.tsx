import { FC } from "react";
import { Modal, Text } from "@nextui-org/react"

interface ModalUiProps {
    children: React.ReactNode;
    title: string;
    visible: boolean;
    toogleModal: () => any;
    footer?: React.ReactNode;
}

export const ModalUi: FC<ModalUiProps> = ({ children, title, visible, toogleModal, footer }) => {
    
    const closeHandler = () => {
        toogleModal();
    };

    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    {title}
                </Text>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                {footer && footer}
            </Modal.Footer>
        </Modal>
    )
}
