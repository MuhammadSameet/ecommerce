
export default function fleximage(){
    return (
        <>

<div className="flex items-center justify-center h-screen w-full bg-gradient-to-r from-[#FFDEE9] to-[#B5FFFC]  p-4">
  <div className=" p-4 w-full max-w-xl">
    <h2 className="text-3xl  font-semibold text-black mb-4 text-center">Join the club and get the benefits</h2>
    <p className="text-lg  text-black mb-6 text-center">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more</p>
    <form action="#" method="POST">

    <div className="flex sm:flex-none space-x-4 mb-6 pl-2">
        <label className="text-black flex items-center">
          <input type="checkbox" className="mr-2" /> Exclusive offers
        </label>
        <label className="text-black flex items-center">
          <input type="checkbox" className="mr-2" /> Free events
        </label>
        <label className="text-black flex items-center">
          <input type="checkbox" className="mr-2" /> Large discounts
        </label>
      </div>
      
    
  <div className="max-w-xl mx-auto p-6">
   
    <div className="flex items-center mt-1">
      <input
        type="email"
        id="input-9"
        className="w-full h-14 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm"
        placeholder="Your@mail.com"
      />
      <button className="h-14 px-7 text-sm bg-blue-500 border border-l-0 border-blue-500 rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none">
        SignUp
      </button>
    </div>
 
</div>

   
      
    </form>
  </div>
</div>




        </>
    )
}
