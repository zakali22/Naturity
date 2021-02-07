import React from "react";
import {ReactComponent as LogoImage} from "../assets/Logo1.svg"
import Social from "../components/Social"
import Form from "../components/Form"
import ReactDOM from "react-dom";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import image2 from "../assets/image/aloe-vera2.jpg"
import image3 from "../assets/image/plant1.jpg"
import image4 from "../assets/image/plant4.jpg"
import image5 from "../assets/image/plant6.jpg"

const Power2 = window.Power2;
const images = [image2, image3, image4, image5]

gsap.registerPlugin(CSSRulePlugin);

class TempLanding extends React.Component {
    constructor(props){
        super(props)

        this.slideTween = null
        this.heading = null
        this.logo = null
        this.overlay = null
        this.rightPanel = React.createRef()
    }

    componentDidMount(){
        const textEl = document.querySelectorAll('.temp-body__description, .temp-body__subheading, p, .temp-body__form, .btn')
        const leaf3 = document.querySelector('#leaf3')
        const leaf2 = document.querySelector('#leaf2')
        const leaf1 = document.querySelector('#leaf1')
        const dot = document.querySelector('#dot')
        const headlineText = document.querySelector('#headline')

        this.slideTween = new gsap.timeline();
        this.slideTween
            .from(this.overlay, 2, {width: "100%"})
            .set(this.overlay, {autoAlpha: 0})

            .from(this.logo, 1.3, {scale: "0.6", autoAlpha: 0}, "-=1.6")
            .from(dot, 1, {autoAlpha: 0}, "-=.2")
            .from(leaf3, .7, {autoAlpha: 0, x: "+=10", y: "+=10", rotation: -50, transformOrigin: "center"})
            .from(leaf2, .7, {autoAlpha: 0, x: "-=12", y: "+=22", rotation: -55, transformOrigin: "center"})
            .from(leaf1, .7, {autoAlpha: 0, x: "-=20", y: "+=5", rotation: -55, transformOrigin: "center"})
            .from(headlineText, .7, {autoAlpha: 0, y: "+=20"})
            
            .from(this.heading, .5, {autoAlpha: 0, y: 30}, "-=3.2")
            .staggerFrom(textEl, .5, {autoAlpha: 0, y: 30}, 0.08, "-=3")
            .to(CSSRulePlugin.getRule(".temp-body__heading:after"), 1.8, {
                cssRule: {width: "100%"},
                delay: .4
            })
            // .staggerFromTo(leaves, .5, {autoAlpha: 0.5, x: "-30px", rotate: -10}, {autoAlpha: 1, x: 0, rotate: 0}, 0.05)

            this.slideTween.eventCallback("onComplete", this.imageSlideShow)

    }

    // imageSlideShow = () => {
    //     let bgImagesCounter = 0

    //     this.imageSlideShow = window.setInterval(() => {
    //         if(this.rightPanel.current){
    //             this.rightPanel.current.style.backgroundImage = `url(${images[bgImagesCounter]})`

    //             if(bgImagesCounter < images.length - 1){
    //                 bgImagesCounter++
    //             } else {
    //                 bgImagesCounter = 0
    //             }
    //         }
    //     }, 5000)
    // }

    render(){
        return (
            <div className="temp-main">
                <div className="temp-overlay" ref={element => this.overlay = element}></div>
                <div className="temp-left-panel">
                    <header className="temp-header">
                        <a href="#" ref={element => this.logo = element}><LogoImage /></a>
                    </header>
                    <div className="temp-body">
                        <h1 ref={element => this.heading = element} className="p temp-body__heading">Coming Soon<span className="fill-green">.</span></h1>
                        <div className="temp-body__description">
                        <h2 className="temp-body__subheading">Who are we<span className="fill-green fill-green--question-mark">?</span></h2>
                        <p>We have been producing Natural Aromatherapy and Skincare Products since 2014. We have a passion for Producing Natural Skincare and Aromatherapy products which aren't only super natural in their origins, but effective in giving you wonderful skin and a rejuvenated mind. Using botanical extracts, we take the natural properties of plants to renew, regenerate and revive and include them in our skincare products to produce highly effective, indulgent skincare products that give visible results to your skin, whilst maintaining our ethics of provenance and naturalness.</p>

                        <h2 className="temp-body__subheading">Get notified<span className="fill-green">.</span></h2>

                        <Form />

                        <Social />
                        
                        </div>
                    </div>
                </div>
                <div className="temp-right-panel" ref={this.rightPanel}></div>
            </div>
        )
    }
}

export default TempLanding