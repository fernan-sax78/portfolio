

function Footer() {
    const date = new Date();
    const today = date.getFullYear();
    const begin = today - 3;
  
  return (
    <footer className = "footer border border-top-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className = "p-8 flex justify-between items-center my-2 mx-auto lg:flex-row flex-col gap-5">
        <span className = "text-4xl text-white font-semibold ">
            Titodev...
        </span>
        <p className ="text-slate-600 lg:text-[18px] text-[12px]">
          © All rights reserved from 
          <span className = "text-[#f2f2f2]">
            {begin}
          </span> untill now <span className = "text-[#f2f2f2]">{today}</span></p>
      </div>
    </footer>
  )
}

export default Footer
