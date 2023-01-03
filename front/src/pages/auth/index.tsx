import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./auth.module.scss";
import {Field, Form, Formik} from "formik";
import Button from "../../modules/Button/Button";
import cx from "classnames"
import {useDispatch} from "react-redux";
import {showAdminPage} from "../../redux/admin-reducer";
import Link from 'next/link';

const AuthPage = () => {
  const dispatch = useDispatch()

  const validateEmail = (value: string) => {
    if (!value) {
      return "Обязательное поле";
    } else {
      if (!/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]/.test(value)) {
        return "Неверный email"
      }
    }
  }

  const validatePassword = (value: string) => {
    if (!value) {
      return "Обязательное поле"
    }
  }

  return (
    <MainLayout>
      <div className={styles.form}>
        <div className={styles.header}>
          <h2>Авторизация</h2>
        </div>
        <Formik initialValues={{
          email: "",
          password: "",
          isAdmin: false,
        }} onSubmit={(values, {resetForm}) => {
          dispatch(showAdminPage(values.isAdmin))
          console.log("submit:", values)
          resetForm()
        }}>
          {({errors, touched}) => (
            <Form>
              <Field name="email"
                     validate={validateEmail}
                     placeholder={"Электронная почта"}
                     className={cx(styles.field)}>
              </Field>
              {errors.email && touched.email && (
                <div className={styles.errors}>{errors.email}</div>
              )}

              <Field name="password"
                     type="password"
                     validate={validatePassword}
                     placeholder={"Пароль"}
                     className={cx(styles.field)}>
              </Field>
              {errors.password && touched.password && (
                <div className={styles.errors}>{errors.password}</div>
              )}
              <label className={styles.checkbox}>
                <Field type="checkbox" name="isAdmin"/>
                <span className={styles.checkbox__text}>Войти как администратор</span>
              </label>
              <div className={styles.button}>
                <Button text={"Авторизоваться"} type={"submit"}/>
              </div>
            </Form>
          )}
        </Formik>
        <br/>
        <div className={styles.link}>Нет аккаунта? <Link href={"/registration"}>Зарегистрироваться</Link></div>
      </div>
    </MainLayout>
  );
};

export default AuthPage;