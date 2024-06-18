

const Navbar = ()=>{
    return(
        <section className="flex justify-between text-black bg-white w-full h-16 items-center">
            <img className=" " src="/images/logok.png" alt="hey"/>
            
            <div className=" mr-8 ">
                <ul className="flex flex-row justify-between w-64">
                    <li>Home</li>
                    <li>About Us</li>
                    <button className="bg-black py-1 px-2 rounded text-white">Contact US</button>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;