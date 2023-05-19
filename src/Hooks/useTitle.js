import { useEffect } from "react"

const useTitle = (title)=>{
    useEffect(()=>{

        document.title = `${title} |Toy Universe`
    },[title])
}

export default useTitle;