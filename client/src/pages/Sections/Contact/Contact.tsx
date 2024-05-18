import { contact } from '../../../assets/images/images';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
const Contact = () => {
	const isMobile = useMediaQuery('(max-width:768px)');
	const variants = {
		initial: !isMobile
			? {
					opacity: 0,
					x: -100,
			  }
			: {},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
			},
		},
	};
	return (
		<div className=' lg:py-20 pb-10 bg-white ' id='contact'>
			<div className='mx-auto text-center text-slate-600 font-semibold '>
				<form
					method='post'
					action=''
					className=' bg-white w-full    mx-auto   '
				>
					<div className='container '>
						<div className='lg:flex items-start  '>
							<div className='lg:w-1/2 py-10 lg:py-20 mx-auto  rounded-3xl lg:bg-slate-50  me-auto lg:mx-0 lg:px-20 lg:max-w-full '>
								<h1 className='text-lg mb-4 text-center uppercase font-extrabold  lg:bg-slate-100 ps-3 py-2 rounded-lg'>
									Contact
								</h1>
								<motion.div
									className='w-full flex gap-4'
									variants={variants}
									whileInView={'animate'}
									initial={!isMobile ? 'initial' : ''}
								>
									<div className='w-full mb-4'>
										<input
											type='text'
											placeholder='Nom Complet'
											
										/>
									</div>
								</motion.div>
								<motion.div
									className='w-full mb-4'
									variants={variants}
									whileInView={'animate'}
									initial={'initial'}
								>
									<input
										type='text'
										placeholder='Email'
										
									/>
								</motion.div>
								<motion.div
									className='w-full mb-4'
									variants={variants}
									whileInView={'animate'}
									initial={'initial'}
								>
									<input
										type='text'
										placeholder='Objet'
										
									/>
								</motion.div>
								<motion.div
									className='w-full mb-2'
									variants={variants}
									whileInView={'animate'}
									initial={'initial'}
								>
									<textarea
										placeholder='Message'
									/>
								</motion.div>
								<motion.div
									className='w-full'
									variants={variants}
									whileInView={'animate'}
									initial={'initial'}
								>
									<button className=' w-full mx-auto rounded-4 py-3  bg-slate-700 text-slate-50 font-semibold duration-300  text-sm hover:bg-slate-600'>
										Envoyer
									</button>
								</motion.div>
							</div>
							<div className='hidden lg:flex   lg:w-1/2 p-20  '>
								<motion.img
									src={contact}
									alt=''
									className=''
									initial={{ x: 200, opacity: 0 }}
									whileInView={{
										opacity: 1,
										x: 0,
										transition: { duration: 0.8 },
									}}
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
