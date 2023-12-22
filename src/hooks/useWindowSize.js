import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize,setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(()=>{

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        } 

        handleResize();

        window.addEventListener("resize", handleResize);

        // const cleanup = () => {
        //     console.log('runs if dep change')
        //     window.removeEventListener("resize", handleResize)
        // }
        // return cleanup; the coomented section can be replaced by below
        return () => window.removeEventListener("resize", handleResize)

    }, [])

    return windowSize
}

export default useWindowSize;