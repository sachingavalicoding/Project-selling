import Button from "../../components/ui/Button"

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-black text-white">
            <main className="container mx-auto min-h-[50rem] grid place-items-center gap-3 px-10 py-5 grid-cols-1 lg:grid-cols-2 ">
                <div >
                    <h2 className="text-white font-medium text-3xl font-pop my-5"> <span className="text-4xl text-indigo-700"> CodeMarket  </span>  Unleash the Power of Web Projects - Buy, Sell, and Explore!</h2>
                    <p className="text-gray-50 opacity-75 my-3">
                        Welcome to CodeMarket, Whether you are looking to buy a ready-made solution or showcase and sell your own creations, CodeMarket is the ultimate hub for web enthusiasts. Join our community and turn your passion for web development into a thriving marketplace experience!
                    </p>
                    <div className=" flex gap-3 mt-10">
                        <Button text={"Join Now"} url={"/"} />
                        <Button text={"Learn More "} url={"/"} />
                    </div>
                </div>
                <div>
                    <img src="https://www.codingnepalweb.com/demos/create-responsive-website-html-css/hero-bg.png" alt="hero image" />
                </div>
            </main>
        </div>
    )
}

export default Home