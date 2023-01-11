import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Descriptions, List, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Button from "../../modules/Button/Button";
import {logout} from "../../redux/user-reducer";
import styles from "./user.module.scss"

const UserPage = () => {

  const dispatch = useDispatch()

  const user = useSelector((state: RootState) => state.user.user)
  console.log(user)
  const isLogin = useSelector((state: RootState) => state.user.isLogin)
  console.log(isLogin)

  const data = [
    `Имя: ${user?.name}`,
    `Фамилия: ${user?.surname}`,
    `Отчество: ${user?.patronymic}`,
    `Электронная почта: ${user?.email}`,
  ];
  return (
    <MainLayout>
      <div style={{padding: "20px"}}>
        <List
          header={<div><strong>Личный кабинет</strong></div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
        <Button text={"Выйти"} className={styles.button} onCLick={() => dispatch(logout())}/>
      </div>
    </MainLayout>
  );
};

export default UserPage;