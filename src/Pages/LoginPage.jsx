import react,{useRef} from "react";
import img from '../assets/images/login-img.png' ;
import { useNavigate } from 'react-router';
function LoginPage(){

    const imageRef = useRef();
    const userRef = useRef();
    const passRef = useRef();
    const errorRef = useRef();

    const THRESHOLD = 15;

    let navigate = useNavigate();

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

    function checkAuthorization(){
        const errorDiv = errorRef.current;
        const userDiv = userRef.current.value;
        console.log(userDiv);
        const passDiv = passRef.current.value;
        console.log(passDiv);
        if(userDiv == "vishalaneja" && passDiv == "123456") {
            navigate('/home')
        }
        else {
            errorDiv.value = "Wrong Username/Password";
            console.log("Error :Wrong Username/Password")
        }
        
    }


    return(
        <div className="flex justify-center w-full h-screen py-3 bg-blue-900">
                <div className=" flex gap-3 items-center justify-around w-2/3 px-10 h-full bg-white rounded-xl">
                    <div>
                        <div className=" login-image w-full" ref={imageRef} onMouseMove={handleHover} onMouseLeave={resetStyles}>
                            <img  className="h-full w-full" src={img} alt="Login Laptop" />
                        </div>
                    </div>
                    
                    <form className=" text-xl flex flex-col gap-4 w-80 items-center">
                        <h1 className="font-bold text-3xl mb-3">Login</h1>
                        <input className="bg-gray-300 rounded-full p-2.5 text-lg w-72 pl-4" ref={userRef} type="text" placeholder="Username"/>
                        <input className="bg-gray-300 rounded-full p-2.5 text-lg w-72 pl-4" ref={passRef} type="password" placeholder="Password" />
                        <button className=" mt-4 py-2 text-white bg-green-600 rounded-full w-72" onClick={checkAuthorization}>Login</button>
                        <h1 className="text-red-800 p-2.5 text-lg w-72 pl-4" ref={errorRef}></h1>
                    </form>
                </div>
        </div>
    )
}

export default LoginPage;