
import {motion} from 'framer-motion'
import { services_list } from '../../../utils/constants/Constants';
import { useMediaQuery } from '@react-hook/media-query';
const Services = () => {
  const isMobile = useMediaQuery('(max-width:768px)')
  return (
    <section className=" bg-slate-50 overflow-hidden" id="services">
      <div className="container">

      <h3 className="lg:text-3xl font-extrabold text-slate-600 text-center lg:mb-4 text-2xl">
        SERVICES
      </h3>
      <span className="lg:flex mx-auto w-[70px] h-[5px] bg-slate-600  lg:mb-10 hidden "></span>
      <div className=" text-slate-500 tracking-wide lg:mt-20 leading-8 lg:bg-white rounded-3xl px-0 lg:px-50 py-14 lg:shadow-lg text-lg font-extrabold mb-10 lg:mb-44  ">
        <motion.p className='lg:px-12 text-start font-bold lg:text-justify text-sm lg:text-md leading-7 lg:leading-8' initial={!isMobile?{opacity:0,translateY:100}:{}} transition={{duration:1,stiffness:100}} whileInView={{opacity:1,translateY:0}}>
          Plongez dans l'univers captivant de nos réalisations qui témoignent de
          notre engagement inébranlable envers l'excellence et la qualité.
          <br /> Chez <span className='uppercase underline font-extrabold text-blue-700'>Société MULTI SERVICES</span>, nous sommes fiers de partager avec
          vous un échantillon de nos travaux dans les domaines du jardinage, de
          la sécurité, de l'entretien d'espaces verts et de la plomberie.<br /> Chaque
          projet est le fruit d'une collaboration méticuleuse entre notre équipe
          de professionnels expérimentés et nos clients, résultant en des
          créations uniques et fonctionnelles qui dépassent les attentes.
        </motion.p>
      </div>
      </div>
      <div className="gap-10 bg-slate-50 container ">
     
     {
      services_list.map((item,index)=>{
        return (
        <div className={`lg:flex ${index%2?'lg:flex-row-reverse':''} mb-10 lg:mb-40 rounded-3xl`} key={index}>
          <div className=" aspect-[3/4] mb-10 rounded-[20px] lg:w-1/3 flex justify-center items-center lg:p-10  max-h-[700px] relative overflow-hidden ">
            <img
              className="absolute translate-x-1/2  w-full h-auto -left-1/2 "
              src={item.icon}
              alt=""
            />
          </div>
          <motion.div className={`lg:w-2/3 py-2 ${index%2===0 ? "lg:ps-10":"lg:pe-10"}`} initial={!isMobile?{opacity:0,translateX: index%2===0?-200:200}:{}} whileInView={{opacity:1,translateX:0}} transition={{duration:2,type:'spring'}}>
            <h3 className="text-3xl lg:text-5xl uppercase mx-auto font-extrabold text-slate-600 mb-10 inline-flex  ">
              {item.title}
            </h3>
            <ul className='list-item'>
              {item.detailedDescription.map(description=>{
                return <li key={description} className="text-md list-item lg:text-justify text-slate-500 leading-8 font-semibold mb-5">
                {description}
                </li>
              })}
            

            </ul>
          </motion.div>
        </div>
        )
      })
     }
      </div>
    </section>
  );
};

export default Services;
