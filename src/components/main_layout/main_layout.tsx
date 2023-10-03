import { component$, useStylesScoped$ } from "@builder.io/qwik"; 
import STYLE from "./main_layout.scss?inline";
import { scrollTo } from "~/utils/utils";

export default component$(() => {
    useStylesScoped$(STYLE);
    return <div class="mainlay" id="home">
        <div class="background"> 
            <div class="overlay"></div>
        </div>  
        <div class="content">
            <h3 class="name_holder">
                Fibraa <span>Solution</span>
            </h3>
            <p class="slogan">
                We do all your verifications
            </p>
        </div>
        <div class="arrow_wrap animate__animated animate__bounce animate__infinite animate__delay-1s">
            <button onClick$={() => scrollTo("about")}>
            <i class="fa-solid fa-angles-down"></i>  
            </button>
        </div>
    </div>; 

}); 
