import Navbar from "@/components/navabar"
import hey from "@/components/hey.module.css"

export default function Home() {
  return (
    <>
    <div className="w-full bg-white ">
      <Navbar/>
      <div className="flex flex-col items-center justify-center bg-white h-[700px] w-full ">
        <h1 className="text-2xl font-bold">Welcome to Kyrian&Co</h1>
        <h4 className="my-8 text-sm font-bold text-gray-500" >The best Ecommerce website</h4>
        <button className="bg-black text-white px-1 py-1 mt-4 rounded">Explore</button>
        <img  src="/images/Image - Drag in to fill..svg" className="w-[1080px] h-[695.2px] mt-16"/>
      </div>
      <section className="h-[400px] mt-32 bg-white">
          <div className=" flex flex-col justify-start ml-16 my-4 ">
            <p className="justify-start text-black text-3xl font-bold justify-start">Heading</p>
            < p className="text-sm font-bold justify-start mb-4 text-gray-500">subheading to introduce testimonials</p>
          </div>
          <div className="flex justify-around items-center  bg-white rounded-lg  mt-8  my-16">
            <div className="w-1/4 h-32 rounded-lg  my-8 border-1  border-black shadow-xl">
              <h1 className="text-black text-sm font-bold text-center">"a terrific place of praise</h1>
              <img src="/images/graf.svg" alt="yeah" className="mt-8 ml-2" />
            </div>
            <div className="w-1/4 h-32 rounded-lg my-8 border-1 border-black  shadow-xl">
              <h1 className="text-black text-sm font-bold text-center">" A fantastic bit of feedback"</h1>
              <img src="/images/nice.svg" alt="yeah" className="mt-8 ml-2"/>
            </div>
            <div className="w-1/4 h-32 rounded-lg my-8 font-bold border-1 border-black  shadow-xl">
              <h1 className="text-black text-sm text-center">" A genuinely glowing review"</h1>
              <img src="/images/wonderful.svg" alt="yeah" className="mt-8 ml-2" />
            </div>
          </div>
      </section>
      </div >
      <section className="flex justify-around w-full bg-white h-[250px]">
        <div className="flex  flex-col justify-between mb-4">
          <img src="/images/faceb.svg"/>
          <div className="flex">
            <img src="/images/faceb.svg"/>
            <img src="/images/linkedin.svg"/>
            <img src="/images/faceb.svg"/>
            <img src="/images/faceb.svg"/>
          </div>
          </div>
          <div className="flex flex-col justify-between mb-4">
            <h1 className="text-1xl font-bold">contact us</h1>
            <h1 className="text-1xl font-bold">home</h1>
            <h1 className="text-1xl font-bold">about us</h1>
            <h1 className="text-1xl font-bold">history</h1>
          </div>
          <div className="flex flex-col justify-between mb-4">
            <h1 className="text-1xl font-bold">email</h1>
            <h1 className="text-1xl font-bold">phone</h1>
            <h1 className="text-1xl font-bold">sign in</h1>
            <h1 className="text-1xl font-bold">history</h1>
          </div>
          <div className="flex flex-col justify-between mb-4">
            <h1 className="text-1xl font-bold">contact us</h1>
            <h1 className="text-1xl font-bold">home</h1>
            <h1 className="text-1xl font-bold">about us</h1>
            <h1 className="text-1xl font-bold">history</h1>
          </div>
          </section>
          <div className="flex justify-center text-2xl font-bold ">
            bye kyrian co.
          </div>
        
        
    </>
  )
}
