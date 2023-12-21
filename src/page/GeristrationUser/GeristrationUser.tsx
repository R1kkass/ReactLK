import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Flex, Form, Input, Select, Upload } from "antd";
import { userApi } from "../../app/services/userService";

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const GenirationUser: React.FC = () => {
    const [registration, {isLoading}] = userApi.useRegistrationMutation()
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        registration(values);
    };
    return (
        <Flex justify="center" align="center" vertical>
            <Form form={form} name="control-hooks" onFinish={onFinish}>
                <h1>Создать пользователя</h1>
                <Form.Item
                    name="login"
                    label="Логин"
                    rules={[
                        {
                            required: true,
                            min: 5,
                            message: "Пожалуйста заполните логин",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            min: 5,
                            message: "Пожалуйста заполните пароль",
                        },
                    ]}
                >
                    <Input type="password" />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="Имя"
                    rules={[
                        {
                            required: true,
                            min: 5,
                            message: "Пожалуйста заполните имя  ",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="secondName"
                    label="Фамилия"
                    rules={[
                        {
                            required: true,
                            min: 5,
                            message: "Пожалуйста заполните фамилию",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Отчество"
                    rules={[
                        {
                            required: true,
                            min: 5,
                            message: "Пожалуйста заполните отчество",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Должность"
                    name="jobTitle"
                    rules={[{ required: true, message: "Пожалуйста заполните должность" }]}
                >
                    <Select>
                        <Select.Option value="Программист">
                            Программист
                        </Select.Option>
                        <Select.Option value="Менеджер">Менеджер</Select.Option>
                        <Select.Option value="3D дизайнер">
                            3D дизайнер
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Номер"
                    name="numberPhone"
                    rules={[
                        {
                            required: true,
                            min: 10,
                            message: "Пожалуйста заполните номер",
                        },
                    ]}
                >
                    <Input addonBefore="+7" />
                </Form.Item>
                <Form.Item
                    label="Принят"
                    name="date"
                    rules={[{ required: true }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Фото"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    name="photo"
                    rules={[{ required: true }]}
                >
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Загрузить фото</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Button htmlType="submit">Создать</Button>
            </Form>
        </Flex>
    );
};

export default GenirationUser;
