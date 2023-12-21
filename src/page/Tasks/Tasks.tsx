import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
    Button,
    DatePicker,
    Flex,
    Form,
    Input,
    Select,
    TreeSelect,
    Upload,
} from "antd";
import { tasksApi } from "../../app/services/tasksService";
import { userApi } from "../../app/services/userService";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const Tasks: React.FC = () => {
    const [registration, { isLoading }] = tasksApi.useAddTaskMutation();
    const { isLoading: userLoading, data } = userApi.useGetAllUsersQuery();
    const [form] = Form.useForm();
    console.log(data);

    const onFinish = (values: any) => {
        registration(values);
    };

    return (
        <Flex justify="center" align="center" vertical>
            <Form
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{
                    width: 600,
                    border: "1px solid gray",
                    borderRadius: 20,
                    padding: 20,
                }}
            >
                <h1>Создать задачу</h1>
                <Form.Item
                    name="title"
                    rules={[
                        {
                            required: true,
                            min: 5,
                            message: "Пожалуйста заполните название",
                        },
                    ]}
                    label="Название"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="contributor"
                    label="Работники"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста заполните работники",
                        },
                    ]}
                >
                    <Select>
                        {data?.user?.map((user) => (
                            <Select.Option value={user?._id}>
                                {user?.name} {user?.secondName} {user?.lastName} {user?.jobTitle}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="status"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста заполните статус",
                        },
                    ]}
                    label="Статус"
                >
                    <TreeSelect
                        treeData={[
                            { title: "Не прочитано", value: "Не прочитано" },
                            { title: "В работе", value: "В работе" },
                            {
                                title: "Готово для проверки",
                                value: "Готово для проверки",
                            },
                            { title: "Готово", value: "Готово" },
                            { title: "Выполнено", value: "Выполнено" },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="correlation"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста заполните важность",
                        },
                    ]}
                    label="Важность"
                >
                    <TreeSelect
                        treeData={[
                            { title: "Срочно", value: "Срочно" },
                            { title: "Несрочно", value: "Несрочно" },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="time"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    label="Время"
                >
                    <RangePicker />
                </Form.Item>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            min: 5,
                        },
                    ]}
                    name="description"
                    label="Описание"
                >
                    <TextArea rows={4} />
                </Form.Item>
                {/* <Form.Item
                    label="Загрузить"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>
                                Загрузить материал
                            </div>
                        </div>
                    </Upload>
                </Form.Item> */}
                <Button htmlType="submit">Button</Button>
            </Form>
        </Flex>
    );
};

export default Tasks;
