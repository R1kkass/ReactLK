import { EllipsisOutlined } from "@ant-design/icons";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Button, Card, Dropdown, Flex, Form } from "antd";
import { theme, Row, Col, Input } from "antd";
import MessageUnit from "../../shared/MessageUnit/MessageUnit";
import { socket } from "../../app/socket";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const { TextArea } = Input;

const Chat = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [form] = Form.useForm();

    const [data, setData] = useState([]);
    function sendMessage(data) {
        socket.emit("hi", {
            idRoom: "123",
            message: data.message,
            access_token: localStorage.getItem("access_token"),
        });
    }
    function onFooEvent(value) {
        setData(value);
    }
    useEffect(() => {
        socket.connect();
        socket.on("hi", (value) => onFooEvent(value));

        // document.querySelector("#messages")?.scrollTop=

        return () => {
            socket.disconnect();
            // BAD: missing event registration cleanup
        };
    }, []);

    useEffect(() => {
        document.querySelector("#messages")?.scrollTo({
            top: Number(document.querySelector(".ant-card-body")?.clientHeight),
        });

        // document.querySelector(".ant-card-body")?.offsetHeight;
    }, [data]);

    return (
        <div
            style={{
                background: "#F5F7FA",
            }}
        >
            <PageContainer
                style={{ background: colorBgContainer }}
                header={{
                    title: "Чат",
                }}
                tabProps={{
                    type: "editable-card",
                    hideAdd: true,
                    onEdit: (e, action) => console.log(e, action),
                }}
            >
                <Card
                    id="messages"
                    style={{
                        height: 500,
                        border: "1px solid #424242",
                        position: "relative",
                        overflowY: "auto",
                        width: "100%",
                    }}
                >
                    {/* <Message /> */}
                    <MessageUnit data={data} />
                </Card>
                <Row
                    style={{
                        position: "relative",
                        justifyContent: "space-between",
                    }}
                    justify="center"
                >
                    <Form style={{ display: "flex" }} onFinish={sendMessage}>
                        <Form.Item
                            style={{ width: "calc(80vw - 400px)" }}
                            name="message"
                        >
                            <TextArea
                                placeholder="Введите сообщение"
                                autoSize={{ minRows: 1, maxRows: 6 }}
                            />
                        </Form.Item>
                        <Button htmlType="submit" type="primary">
                            Отправить
                        </Button>
                    </Form>
                </Row>
            </PageContainer>
        </div>
    );
};

export default Chat;
