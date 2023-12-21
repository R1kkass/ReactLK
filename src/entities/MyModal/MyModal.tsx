import React, { useState } from "react";
import { Button, Modal } from "antd";

interface MyModalProps {
    children: React.ReactNode;
    title: string
}

const MyModal: React.FC<MyModalProps> = ({ children, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="link" onClick={showModal}>
                Подробнее
            </Button>
            <Modal
                title={title}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {children}
            </Modal>
        </>
    );
};

export default MyModal;
