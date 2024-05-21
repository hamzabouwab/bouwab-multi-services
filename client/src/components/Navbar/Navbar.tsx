
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { navigation } from '../../utils/constants/Constants'
import { motion} from 'framer-motion'
const Navbar = ({scrollOffset}:{scrollOffset:number}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header className={`fixed duration-500 max-w-[100vw] inset-x-0 top-0 z-50 ${scrollOffset>=20?'bg-white shadow-lg':'bg-transparent'}`}  initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} animate='inactive' >
    <div className="container w-full ">

      <nav className="flex items-center  justify-between  py-4 w-full" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h2 className='font-bold text-lg text-slate-700'>{/*Logo*/}</h2>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex ">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="rounded-lg px-3 py-1 text-xs font-bold tracking-wide leading-6 text-gray-500 hover:bg-cyan-200 duration-300 hover:text-slate-800">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 font-bold text-slate-600">
              {/*Logo*/}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-cyan-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root border-t border-slate-100 pt-3">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center text-gray-900 hover:bg-cyan-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

    </div>
  </motion.header>
  )
}

export default Navbar