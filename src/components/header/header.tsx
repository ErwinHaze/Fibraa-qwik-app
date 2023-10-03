import { component$, useStylesScoped$, useSignal, $ } from "@builder.io/qwik";
import STYLE from "./header.scss?inline"; 
import { scrollTo } from "~/utils/utils"

export default component$(() => {

    useStylesScoped$(STYLE);
    const activeNav = useSignal("home");
    const handleNavClick = $((elementId: string) => {
        scrollTo(elementId);
        activeNav.value = elementId;
    });  
    return (
        <header>
            <div class = "topbar animate__animated animate__fadeInDown">
                <div class = "container">
                    <div class ="topbar_inner">
                        <div class ="logo">
                            <a href ="#">
                                <img src= "images/fibraa.png" alt= "logo"/>
                            </a>
                        </div>
                        <div class="menu">
                            <ul>
                                <li class={{current : activeNav.value === "home"}}>
                                    <button onClick$={() => handleNavClick("home")}>Home</button>
                                </li>
                                <li class={{current : activeNav.value === "api"}}>
                                    <button onClick$={() => handleNavClick("api")}>API</button>
                                </li>
                                <li class={{current : activeNav.value === "services"}}>
                                    <button onClick$={() => handleNavClick("services")}>Services</button>
                                </li>
                                <li class={{current : activeNav.value === "pricing"}}>
                                    <button onClick$={() => handleNavClick("pricing")}>Pricing</button>
                                </li>
                                <li class={{current : activeNav.value === "news"}}>
                                    <button onClick$={() => handleNavClick("news")}>News</button>
                                </li>
                                <li class={{current : activeNav.value === "about"}}>
                                    <button onClick$={() => handleNavClick("about")}>About Us</button>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
        </header>
    )
})