import {
  NavbarImage,
  Navigator,
  Options,
  LoginOption,
  LinkOption,
  ModalInput,
  Submitbutton,
  ModalButtonSplitter,
} from "./HomePageStyle";
import MobileIcon from "../icons/MobileIcon";
import MenuIcon from "../icons/OptionIcon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login, Logout } from "./store/action";
import { Modal,Input,Button } from "antd";
import { useState } from "react";

const NavigationBar = () => {
  const InputValue = useSelector((state) => state?.user?.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const showLoginModal = () => {
    setIsModalVisible(true);
  };
  const dispatch = useDispatch();

  const handleMail = (e)=>{
    setEmail(e.target.value);
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }

  const LoginForm = ()=>{
    setIsModalVisible(true);
  }

  const LoginUser = (e) => {
    e.preventDefault()
    dispatch(Login());
    setIsModalVisible(false);
    setEmail('')
    setPassword('')
  };

  const LogoutUser = () => {
    console.log(InputValue);
    dispatch(Logout());
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  return (
    <NavbarImage>
      <Navigator>
        <LinkOption to="/">PRODUCT</LinkOption>
        <LinkOption id="filter" to="/filter">FILTER(Producted)</LinkOption>
        <Options href="./">PRICING</Options>
        <LoginOption href="./">.</LoginOption>
        {InputValue ? (
          <LoginOption onClick={LogoutUser}>LOGOUT</LoginOption>
        ) : (
          <LoginOption href="./" id="login" onClick={LoginForm}>
            LOGIN
          </LoginOption>
        )}
        <Modal
        title="Login"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} 
        closable={false} 
        maskClosable={false} 
      >
        <form onSubmit={LoginUser}>
        <ModalInput type="email" placeholder="Enter Email" id="mail" value={email} onChange={handleMail} maxLength={42} minLength={13} required/>
        <ModalInput type="password" placeholder="Enter Password" id="password" value={password} onChange={handlePassword} maxLength={14} minLength={6} required/>
        <ModalButtonSplitter>
          <Button type="primary" id="submitButton" htmlType="submit">Submit</Button>
          <Button type="default" onClick={handleCancel}>Cancel</Button>
        </ModalButtonSplitter>
        </form>
      </Modal>
        <MenuIcon />
      </Navigator>
      <MobileIcon />
    </NavbarImage>
  );
};

export default NavigationBar;
