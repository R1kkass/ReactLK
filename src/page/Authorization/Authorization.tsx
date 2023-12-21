import { UserOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Typography } from "antd";
import { userApi } from "../../app/services/userService";
import { useAppDispatch } from "../../app/store/hook";
import { addToken } from "../../app/store/TokenSlice";

const Authorization = () => {
    const [auth] = userApi.useAuthMutation();
    const dispatch = useAppDispatch();

    const onFinish = (values: any) => {
        auth(values).then((e) => {
            dispatch(addToken(e.data));
            localStorage.setItem("access_token", e.data);
        });
    };

    return (
        <Flex
            style={{
                height: 500,
                border: "1px solid #424242",
                position: "relative",
                overflowY: "auto",
                width: "50%",
                margin: "0 auto",
                minWidth: 400,
                borderRadius: 20,
                background: "#141414",
            }}
            justify="center"
            align="center"
            gap={10}
            vertical
        >
            <Form onFinish={onFinish}>
                <Typography.Title level={2}>Авторизация</Typography.Title>
                <Form.Item name="login">
                    <Input
                        style={{ width: "50%", minWidth: 200 }}
                        size="large"
                        placeholder="Логин"
                        prefix={<UserOutlined />}
                    />
                </Form.Item>
                <Form.Item name="password">
                    <Input.Password
                        style={{ width: "50%", minWidth: 200 }}
                        type="password"
                        size="large"
                        placeholder="Пароль"
                        prefix={<UserOutlined />}
                    />
                </Form.Item>

                <Button size="large" htmlType="submit" type="primary">
                    Вход
                </Button>
            </Form>
        </Flex>
    );
};

export default Authorization;
