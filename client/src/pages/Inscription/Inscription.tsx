import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import axios from 'axios';

const { VITE_api_url } = import.meta.env;
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
		delete values.remember;
		axios
			.post(`${VITE_api_url}/user/`, values)
			.then((result) => {
				console.log(result.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	useEffect(() => {
		console.log(VITE_api_url);
	}, []);
	return (
		<div className='min-h-screen justify-center items-center flex flex-col w-full'>
			<Typogr level={2}>S'INSCRIRE</Typogr>
			<Form
				name='inscription'
				labelAlign={'left'}
				labelCol={{ span: 10 }}
				wrapperCol={{ span: 14 }}
				className='p-10 rounded-3xl border bg-slate-50 shadow-lg'
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item<FieldType>
					label="Nom d'utilisateur"
					name='username'
					className='font-semibold text-slate-700'
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input className='font-medium' />
				</Form.Item>
				<Form.Item<FieldType>
					label='email'
					name='email'
					className='font-semibold'
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input type='email' className='font-medium' />
				</Form.Item>

				<Form.Item<FieldType>
					label='Password'
					name='password'
					className='font-semibold'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password className='font-medium' />
				</Form.Item>

				<Form.Item<FieldType>
					name='remember'
					valuePropName='checked'
					labelAlign='right'
					wrapperCol={{ span: 24 }}
				>
					<Checkbox className='font-semibold text-xs text-blue-600'>
						Remember me
					</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ span: 24 }}>
					<Button type='primary' htmlType='submit' style={{ width: '100%' }}>
						s'inscrire
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Inscription;
