

export default function Services_card(
  {icon, title, description}
  :
  {icon:string, title:string, description:string }){
  return (
    <div className="card flex flex-col bg-white lg:bg-slate-50 p-10 rounded-ss-3xl rounded-ee-3xl border-8 border-white gap-3 shadow-xl">
            <img src={icon} alt="" className="w-16" />
            <h3 className="text-xl tracking-normal leading-8 font-extrabold text-slate-600 mt-4">
            {title}
            </h3>
            <p className="text-sm text-slate-500 font-semibold">
            {description}
            </p>
          </div>
  )
}
