import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./admin.module.scss"
import {Table} from "antd";

const AdminPage = () => {
  const dataSource = [
    {
      key: 1,
      date: "22.10",
      email: "123@123.com",
      order: ["Fifa 23 ", "God of War"],
      price: 2200
    },
    {
      key: 2,
      date: "22.10",
      email: "ff@123.com",
      order: ["God of War"],
      price: 1100
    },
    {
      key: 3,
      date: "22.10",
      email: "fff@123.com",
      order: ["Fifa 23 "],
      price: 1100
    },
  ];

  const columns = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Электронная почта',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Заказ',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
    },
  ];
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <Table dataSource={dataSource}
               columns={columns}
               rowClassName={styles.row}
               bordered
        />;
      </div>
    </MainLayout>
  );
}

export default AdminPage;