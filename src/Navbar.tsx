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
            <header className="header">
                <div className="contain">
                    <div className="navbar">
                        <div className="flex">
                            <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705672913/Logo_d4ncug.png" alt="" />
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
                        <div className="btn">
                            <a href="">Sign in</a>
                             <button className="btn-search">Become a Member</button>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="company">
                        <div className="evolve">
                            <h1>Evogym</h1>
                            <h3>Evolutionary fitness</h3>
                            <p>Unrivaled Gym. unparalleled training fitness classes. world <br />class stduio to get the body shapes that you dream of. get your dream body now</p>
                        </div>
                        <div className="reg">
                            <a className="join" href="">Join now</a>
                            <a href="">Learn more</a>
                        </div>
                    </div>

                    <div className="company-logo">
                        <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705672915/HomePageGraphic_tnflxe.png" alt="" />
                    </div>
                </div>

            </header>


            <section>
                <div className="classes">
                    <div className="duration">
                        <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1705672912/BenefitsPageGraphic_wrfyis.png" alt="" />
                    </div>

                    <div className="member">
                        <h1>Millions of happy members getting <span>fit</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, perspiciatis a! Expedita tempora sed alias aliquid iusto temporibus cumque recusandae omnis sit magnam? Ad voluptatem quasi quam debitis velit soluta?</p>
                        <p>Fringilla a sed at suspendisse ut enim volupat.</p>
                        <div className="join">
                            <a href="">Join now</a>
                        </div>
                    </div>
                </div>
            </section>

            
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