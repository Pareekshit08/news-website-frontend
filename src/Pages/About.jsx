import React from "react";
import Header from "../Components/Header";
import FeedbackCarousel from "../Components/Carousel";
function About(){
    return (
        <>
            <Header></Header>
            <div className="white_text padding_20px center_text" >
            <h1>Hello About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex assumenda cum aut minima odio numquam, nisi totam iure cupiditate dolorum. Sapiente distinctio ea quis! Quam id veniam incidunt rerum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum in! Dicta repellendus hic neque, soluta cum molestiae culpa corporis dolorum laborum laboriosam beatae dolores quasi voluptas et nulla expedita?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex assumenda cum aut minima odio numquam, nisi totam iure cupiditate dolorum. Sapiente distinctio ea quis! Quam id veniam incidunt rerum.</p>
            </div>
            
            <FeedbackCarousel></FeedbackCarousel>
        </>
    )
}

export default About;