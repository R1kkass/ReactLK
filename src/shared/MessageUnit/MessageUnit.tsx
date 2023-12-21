import React from 'react';
import { Avatar, List } from 'antd';
import { appJwtDecode } from '../../app/jwtDecode';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const MessageUnit: React.FC = ({data}) => {
  
  const user = appJwtDecode(localStorage.getItem("access_token"))

  return (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item  style={{paddingInline: 8, background: item?.user?._id==user?.id ? 'rgba(3, 160, 94, 0.3)' : 'none'}}>
        <List.Item.Meta
          title={<a href="https://ant.design">{item?.user?.name}</a>}
          description={item?.message}
        />
      </List.Item>
    )}
  />
)};

export default MessageUnit;
