import React, { useState } from "react"
import { People as IPeople } from "./App"



const Navbar:React.FC<IPeople> = ({person}) => {

    const [click, setClick] = useState<number>(0)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        setClick(prev => prev + 1)
    }

    const navMenu = (): JSX.Element =>{
        return (
            <>
            <header>
                <div className="contain">
                    <div className="navbar">
                        <div className="flex">
                            <img src="" alt="" />logo
                        </div>

                        <div className="menu">
                            <div className="menulist">
                                <ul style={{display: "flex", gap: "1rem"}}>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Benefits</a></li>
                                    <li><a href="">our classes</a></li>
                                    <li><a href="">contact us</a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="btn" style={{display: "flex", alignContent: "center"}}>
                                <a href="" style={{marginRight: "10px"}}>Sign in</a>
                                <button>Become a member</button>
                            </div>
                    </div>
                </div>

                {person.map((item)=>{
                    return (
                        <>
                        <div>{item.name}</div>
                        <p>{item.note}</p>
                        <img src={item.url} alt="" />
                        </>
                    )
                })}
                <button onClick={handleClick}>Click value{click}</button>
            </header>
            </>
        )
    }

  return (
    <>
    {navMenu()}
    </>
  )
}

export default Navbar;