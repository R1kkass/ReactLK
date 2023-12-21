import React from "react";
import {
    DesktopOutlined,
    FileOutlined,
    FormOutlined,
    PieChartOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import {BrowserRouter, Link, useLocation, useNavigate, useParams} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Чат", "1", <Link to="/chat"><PieChartOutlined /></Link>),
    getItem("Стаситика", "/stats", <Link to="/stats"><PieChartOutlined /></Link>),
    getItem("Создать пользователя", "sub1", <Link to="/registrationuser"><TeamOutlined /></Link>),
    getItem("Задачи", "sub2", <FormOutlined />, [
        getItem("Посмотр задач", "6", <Link to="/tasks" />),
        getItem("Создать задачу", "8", <Link to="/createtask" />),
    ]),
    getItem("Files", "9", <FileOutlined />),
];

const MyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    
    return (
        <BrowserRouter>
            <Layout style={{ minHeight: "100vh" }}>
                <Header
                    style={{
                        padding: 0,
                        height: 60,
                        background: colorBgContainer,
                    }}
                />

                <Sider collapsible style={{ background: colorBgContainer }}>
                    <Menu
                        style={{ background: colorBgContainer }}
                        defaultSelectedKeys={[]}
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Content style={{ margin: "16px 16px" }}>
                        {children}
                        <Footer style={{ textAlign: "center" }}>
                            Ant Design ©2023 Created by Ant UED
                        </Footer>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
};

export default MyLayout;
