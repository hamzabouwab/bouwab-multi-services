import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import axios from 'axios';



const {VITE_api_url} = import.meta.env
const Inscription: React.FC = () => {
	type FieldType = {
		username?: string;
		email?: string;
		password?: string;
		remember?: string;
	};
	const Typogr = Typography.Title;
	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
		errorInfo
	) => {
		console.log('Failed:', errorInfo);
	};
	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        delete values.remember
		axios.post(`${VITE_api_url}/user/`,values).then(result=>{
            console.log(result.data)
        }).catch(err=>{
            console.log(err.message)
        })
	};
	useEffect(() => {
		console.log(VITE_api_url);
	}, []);
	return (
		<div className='min-h-screen justify-center items-center flex flex-col w-full'>
			<Typogr level={2}>S'INSCRIRE</Typogr>
			<Form
				name='inscription'
				labelCol={{ span: 10 }}
				wrapperCol={{ span: 16 }}
				className='p-10 rounded-2xl border bg-white shadow-lg'
				style={{ maxWidth: 1200 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item<FieldType>
					label="Nom d'utilisateur"
					name='username'
					className='font-bold'
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item<FieldType>
					label='email'
					name='email'
					className='font-bold'
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input type='email' />
				</Form.Item>

				<Form.Item<FieldType>
					label='Password'
					name='password'
					className='font-bold'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item<FieldType>
					name='remember'
					valuePropName='checked'
					wrapperCol={{ offset: 8, span: 16 }}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Inscription;
