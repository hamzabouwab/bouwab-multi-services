import { ArrowLongRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import './style.css';
import { splitStringWithRegex } from '../../../utils/heroSectionFunctions';
import { motion, Variants } from 'framer-motion';
import { Spin } from 'antd';
import { useMediaQuery } from '@react-hook/media-query';
import qs from 'qs';
import axios from 'axios';
import { useState } from 'react';
export default function Hero() {
	const isMobile = useMediaQuery('(max-width:768px)');
	const heroTitle: string[] = splitStringWithRegex('société MULTI SERVICES');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [disableOption, setDisableOption] = useState<boolean>(true);
	const variants: Variants = {
		visible: {
			opacity: 1,
			translateX: 0,
		},
		hidden: {
			opacity: 0,
			translateX: 300,
		},
	};

	function handleSubmit(e: any) {
		setIsLoading(true);
		const item = e.target;
		e.preventDefault();
		const data = qs.stringify({
			nom: item[0].value,
			prenom: item[1].value,
			tel: item[2].value,
			email: item[3].value,
			adresse: item[4].value,
			typeClient: item[5].value,
			message: item[6].value,
		});
		axios
			.post(`${import.meta.env.VITE_api_url}/devis/?${data}`)
			.then((result) => {
				setIsLoading(false);
				console.log(result.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}
	return (
		<div className='bg-white lg:pt-20 py-14 ' id='hero'>
			<div className='container'>
				<div className='relative isolate px-0  pt-17   grid grid-cols-1 lg:grid-cols-2 '>
					<div
						className='absolute md:flex dark:hidden 
             inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 bg-blue-100  text-start '
						aria-hidden='true'
					>
						<div
							className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-lr from-[#5fa3da00] to-[#ff068f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
					<div className=' py-32 sm:py-48 lg:py-40 z-5'>
						<div className='text-center lg:text-start'>
							<h1 className='text-3xl mb-6 font-[900] tracking-normal text-gray-600 sm:text-5xl'>
								{heroTitle.map((item, index) => {
									return (
										<motion.span
											className='uppercase'
											variants={variants}
											initial={!isMobile ? 'hidden' : ''}
											transition={{ staggerChildren: 0.2, delay: index * 0.06 }}
											whileInView={'visible'}
											key={index}
										>
											{item}
										</motion.span>
									);
								})}
							</h1>
							<p className='leading-6 lg:text-sm uppercase font-bold lg:max-w-[70vw] max-w-[80vw]  mx-auto text-sm lg:font-extrabold tracking-wide text-slate-500'>
								Votre Solution Tout-en-Un pour un Environnement
								<br />
								Plus{' '}
								<span className='text-green-500 font-[700] tracking-wider'>
									Vert
								</span>{' '}
								et Plus Propre{' '}
								<SparklesIcon
									height={15}
									className=' inline-flex align-baseline text-slate-600'
								/>
							</p>
							<hr className='w-full hidden lg:flex my-6  ls:my-12' />
							<div className='hidden lg:flex ms-auto gap-x-3 justify-end hover:gap-10 duration-300 items-center flex-grow'>
								<span className='text-blue-500 text-sm  font-extrabold  uppercase leading-none'>
									Demandez votre devis ici
								</span>
								<ArrowLongRightIcon
									height={30}
									className='text-blue-500 animate-pulse duration-300 align-top leading-none me-4'
								/>
							</div>
						</div>
					</div>

					<div className='flex justify-center sm:flex-col sm:items-end z-10 pt-10 lg:pt-2 '>
						<form
							method='post'
							action=''
							className='lg:py-6 lg:px-10 w-full mx-auto lg:bg-slate-50 duration-500 shadow-none lg:shadow-2xl rounded-3xl lg:mb-10'
							onSubmit={handleSubmit}
						>
							<h1 className='text-slate-600 font-bold mb-4 text-lg text-center '>
								Demander votre devis{' '}
							</h1>
							<hr className='w-full mx-auto mb-6 border-[1px] border-slate-100 bg-transparent rounded-full' />
							<div className='w-full flex gap-4'>
								<div className='w-1/2 mb-4'>
									<input type='text' placeholder='Nom' />
								</div>
								<div className='w-1/2'>
									<input type='text' placeholder='Prénom' />
								</div>
							</div>
							<div className='w-full mb-4'>
								<input type='text' placeholder='Téléphone' />
							</div>
							<div className='w-full mb-4'>
								<input type='text' placeholder='Email' />
							</div>
							<div className='w-full mb-4'>
								<input type='text' placeholder='Addresse' />
							</div>
							<div className='w-full mb-4 p-0 shadow-sm  overflow-hidden'>
								<select
									className='m-0'
									name=''
									id=''
									onClick={() => setDisableOption(false)}
								>
									<option
										className='text-xs text-slate-500'
										value='professionnel'
										disabled={disableOption ? false : true}
									>
										-
									</option>
									<option value='professionnel'>Client professionnel</option>
									<option value='particulier'>Client Particulier</option>
									<option value='autre'>Autre</option>
								</select>
							</div>
							<div className='w-full mb-4'>
								<textarea placeholder='Message' />
							</div>
							<div className='w-full'>
								<button className='py-3 w-full mx-auto rounded-lg bg-slate-700 text-slate-50 font-bold duration-300  text-xs hover:bg-slate-600'>
									{isLoading ? <Spin /> : 'Envoyer'}
								</button>
							</div>
						</form>
					</div>

					<div
						className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
						aria-hidden='true'
					>
						<div
							className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
