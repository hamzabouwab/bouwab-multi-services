import { useEffect, useState } from "react";
import { faq_list } from "../../../utils/constants/Constants";
import {motion} from 'framer-motion'
const Faq = ({isMobile}:{isMobile:boolean}) => {
  type faqItem = {
    title: string,
    description: string,
    index:number,
    visible:boolean

  };
  const [faqList, setFaqList] = useState<faqItem[]>([]);

  useEffect(()=>{
    const newFaqList = faq_list.map((item,index)=>{
        return {...item,index:index,visible:false}
    })
    setFaqList(newFaqList)
  },[])
  return (
    <section id="faq" className=" lg:bg-slate-50  ">
      
    <div className="container   ">
    <h3 className="lg:text-3xl font-extrabold text-slate-600 text-center lg:mb-2 text-2xl mb-16">FAQ</h3>
    <span className="lg:flex mx-auto w-[20px] h-[5px] bg-slate-600  mt-2 mb-10 hidden"></span>
    <div className="w-full  lg:py-14 lg:rounded-[50px] lg:px-10  lg:bg-white">
        <div
          className=""
          id="faq"
          role="tabpanel"
          aria-labelledby="faq-tab"
        >
          <div
          className="rounded-t-3xl overflow-hidden "
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white text-gray-900 "
            data-inactive-classes="text-gray-500 "
          >
            {faqList.map((item,index) => {
              return (
                <motion.div className="rounded-xl" initial={!isMobile?{opacity:0,scaleX:0 }:{}} key={index} transition={{duration:.5}} whileInView={{opacity:1,scaleX:1}}>
                  <h2
                    id="accordion-flush-heading-1"
                    className={``}
                    onClick={() => setFaqList(()=>{
                        return faqList.map((it,i)=>{
                            if(i==index){
                                return {...it,visible:!it.visible}
                            }
                            return it
                        })
                    })}
                  >
                    <button
                      type="button"
                      className="flex items-center justify-between w-full px-0 py-5 font-medium text-left rtl:text-right text-blue-600 rounded-none  border-gray-200 "
                      data-accordion-target="#accordion-flush-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-flush-body-1"
                    >
                      <span className="font-semibold text-sm underline underline-offset-2 text-blue-600" >{item.title}</span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 ms-2 duration-300 shrink-0 ${item.visible? '':'rotate-180'}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-flush-body-1"
                    className={faqList[index].visible ?  '':'hidden'}
                    aria-labelledby="accordion-flush-heading-1"
                  >
                    <div className="py-2 border-b border-gray-200 bg-white">
                      <p className="mb-2 py-2 px-4 font-semibold text-sm leading-7 text-gray-500 ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
    </div>
    </div>
    </section>
  );
};

export default Faq;
