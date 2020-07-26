import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import routes, { Route } from 'config/routes';
import styles from './SiderBar.module.scss';
import logo from '../logo.svg';

const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

const SiderBar: React.FC = props => {
  const [collapsed, setCollapsed] = useState(false);

  const { children } = props;

  const toggle = () => setCollapsed(!collapsed);

  const getMenu = (route: Route) => (
    <Menu.Item key={route.key}>
      <Link to={route.url as string}>
        {route.icon}
        <span>{route.name}</span>
      </Link>
    </Menu.Item>
  );

  return (
    <Layout className={styles['sider-layout']}>
      <Sider className={styles.menu} collapsed={collapsed}>
        <div className={styles.header}>
          <div className={styles.placeholder}>
            <img alt="logo" className={styles.logo} src={logo} />
          </div>
          <Title level={4}>React</Title>
        </div>
        <Menu mode="inline" theme="dark">
          {routes.map(route =>
            route.children ? (
              <SubMenu
                key={route.key}
                title={
                  <span>
                    {route.icon}
                    <span>{route.name}</span>
                  </span>
                }
              >
                {route.children.map(child => getMenu(child))}
              </SubMenu>
            ) : (
              getMenu(route)
            )
          )}
        </Menu>
      </Sider>
      <Layout className={styles.site}>
        <Header className={styles.header}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: styles.trigger,
              onClick: toggle
            }
          )}
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default SiderBar;
