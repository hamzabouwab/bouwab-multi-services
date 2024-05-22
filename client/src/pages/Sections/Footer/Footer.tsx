import { BsFacebook, BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import { useMediaQuery } from '@react-hook/media-query';
const Footer = () => {
	const isMobile = useMediaQuery('(max-width:768px)');
	return (
		<footer className='bg-slate-50 shadow' id='footer'>
			<div className='w-full lg:flex lg:flex-row-reverse items-center justify-between  max-w-screen-xl mx-auto px-2 pt-4 lg:px-10 lg:py-8'>
				<div className='flex-1 lg:gap-5 flex flex-col'>
					<h1 className=' text-blue-600 font-semibold lg:font-extrabold text-sm lg:text-lg text-center my-2 lg:my-10 uppercase'>
						vous pouvez également nous contacter sur
					</h1>
					<hr className='lg:w-1/4  mx-auto lg:flex border-slate-300  ' />
					<div className='w-auto flex justify-center gap-8 flex-1 lg:mb-10 mt-5 '>
						<a href='' className='hover:scale-125 duration-300'>
							<BsFacebook
								className='text-blue-700 '
								size={!isMobile ? 50 : 35}
							/>
						</a>
						<a href='' className='hover:scale-125 duration-300'>
							<BsWhatsapp
								className='text-green-700 '
								size={!isMobile ? 50 : 35}
							/>
						</a>
						<a href='' className='hover:scale-125 duration-300'>
							<BsLinkedin
								className='text-blue-900 '
								size={!isMobile ? 50 : 35}
							/>
						</a>
					</div>
				</div>
				<span className='w-full h-[1px] mx-auto  mt-5 lg:mb-5 lg:h-10 bg-slate-300 lg:w-[1px] flex '></span>
				<span className='block text-xs lg:text-lg text-gray-700 font-semibold py-10 text-center  flex-1'>
					© 2024{' '}
					<a href='#' className='hover:underline uppercase'>
						société MULTI SERVICES
					</a>
					. Tous droits réservés
				</span>
			</div>
		</footer>
	);
};

export default Footer;
