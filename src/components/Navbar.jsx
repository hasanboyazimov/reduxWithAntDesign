import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Navigation Three",
    key: "setting",
    icon: <SettingOutlined />,
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login')
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div></div>
        <Button onClick={handleLogout} style={{ marginTop: "10px", marginRight: "10px"}}>Log Out</Button>
      </div>
    </>
  );
};
export default Navbar;
