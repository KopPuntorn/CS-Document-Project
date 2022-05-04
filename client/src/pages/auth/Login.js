import { useDispatch } from 'react-redux';
import React, { Component , useState } from 'react';
import { toast } from 'react-toastify';
import { Form, 
    Input,  
    Row,
    Col,
    Card,
    Label,
    Layout,
    Button
} from 'antd';
import "./login.css";
import { loginHandler } from '../../functions/auth';






const Login = ({ history }) => {
    const [status, setStatus] = useState({});
    const dispatch = useDispatch();

    const roleBaseRedirect = (role) => {
        if(role === 'admin') {
            history.push('/admin/upload1')
            toast.success('เข้าสู่ระบบสำเร็จ')
        }else if(role === 'user'){
            history.push('/search1')
            toast.success('เข้าสู่ระบบสำเร็จ')
        } else {
            toast.error('กรุณาเข้าสู่ระบบ')
        }  
    }


    const onFinish = (values) => {
        
            values = Object.assign(values, status)
            
            console.log(values,status);
            loginHandler(values)
            .then(res => {
                dispatch({
                    type:'LOGGED_IN_USER',
                    payload:{
                        token: res.data.token,
                        name: res.data.payload.user.name,
                        role: res.data.payload.user.role
                    }
                })
                localStorage.setItem('token',res.data.token)
                roleBaseRedirect(res.data.payload.user.role)
                console.log(res.data.payload.user.role)
                
                //alert(res.data)
                //history.push('/login')
            }).catch(err => {
                toast.error('กรุณาเข้าสู่ระบบ')
                console.log(err.response.data)
                //alert(err.response.data)
            })
          
        };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


        return(
            <div className="container-center-horizontal">
                <div className="desktop-14 screen">
                    <div className="overlap-group2" >
                        <h1 className="text-6 db-heavent-bold-midnight-blue-36px">
                        ระบบสืบค้นเอกสาร วิทยาลัยการคอมพิวเตอร์
                        </h1>
                        <div> 
                        <img src={require('../../layout/components/Img/CS.jpg').default} alt="CS image" className="Logo" />
                        </div>
                        <Form                
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >


                        <div className="group-3542 db-heavent-regular-normal-black-20px border-1px-bon-jour">
                            
                            <div className="frame-36255">
                                <img
                                    className="bxbxs-lock"
                                />
                                   
                                <div className="text-5 db-heavent-bold-midnight-blue-36px">
                                เข้าสู่ระบบ
                                </div>
                            </div>
                            
                            <div className="group-username">
                                
                            <Form.Item
                                label={ 
                                    <div className="text-1">ชื่อผู้ใช้</div>
                                    }
                                name="name"
                                rules={[
                                {
                                    message: 'Please input your username!',
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                                
                                
                            </div>
                            

                            
                            <div className="group-password">
                            <Form.Item
                                label={ 
                                    <div className="text-1">พาสเวิร์ด</div>
                                    }
                                name="password"
                                rules={[
                                {
                                    message: 'Please input your password!',
                                },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            </div>
                            


                            <button 
                                className="ant-btn-primary"
                                htmlType="submit"
                            >เข้าสู่ระบบ</button>
                            
                            
                        </div>
                        </Form>
                    </div>
                </div>
            </div>
                

        );
  
    }



export default Login;