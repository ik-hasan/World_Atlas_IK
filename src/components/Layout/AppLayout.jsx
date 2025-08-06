import { Outlet } from "react-router-dom"
import { Footers } from "../UI/Footers"
import { Headers } from "../UI/Headers"

export const AppLayout =()=>{
    return (
        <>
            <Headers/>
            <Outlet/>//url path me change krenge to ye header and footer rhenge hi page pr bs ye outlet wala part change hota rhega 
            <Footers/>
        </>
    )
}