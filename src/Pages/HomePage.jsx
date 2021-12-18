import react,{useRef} from "react";
import img from '../assets/images/login-img.png'
function HomePage(){

    const imageRef = useRef();
    const THRESHOLD = 15;

    function handleHover(e) {

        const imageDiv = imageRef.current;

        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

        imageDiv.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }

    function resetStyles(e) {
        const imageDiv = imageRef.current;
        imageDiv.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }


    return(
        <div className="flex justify-center w-full h-screen py-3 bg-gradient-to-r from-violet-600 to-purple-500">
                <div className=" flex gap-3 items-center justify-around w-2/3 px-10 h-full bg-white rounded-xl">
                    <div>
                        <div className=" login-image w-full" ref={imageRef} onMouseMove={handleHover} onMouseLeave={resetStyles}>
                            <img  className="h-full w-full" src={img} alt="Login Laptop" />
                        </div>
                    </div>
                    <div className=" text-xl flex flex-col gap-4 w-80 items-center">
                        <h1 className="font-bold text-3xl mb-3">Login</h1>
                        <input className="bg-gray-300 rounded-full p-2.5 text-lg w-72 pl-4" type="text" placeholder="Username"/>
                        <input className="bg-gray-300 rounded-full p-2.5 text-lg w-72 pl-4" type="password" placeholder="Password" />
                        <button className=" mt-4 py-2 text-white bg-green-600 rounded-full w-72">Login</button>
                    </div>
                </div>
        </div>
    )
}
export default HomePage;