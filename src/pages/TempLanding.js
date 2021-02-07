import React from "react";
import {ReactComponent as LogoImage} from "../assets/Logo1.svg"
import Social from "../components/Social"
import Form from "../components/Form"
import ReactDOM from "react-dom";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
const Power2 = window.Power2;


gsap.registerPlugin(CSSRulePlugin);

class TempLanding extends React.Component {
    constructor(props){
        super(props)

        this.slideTween = null
        this.heading = null
        this.logo = null
        this.overlay = null
    }

    componentDidMount(){
        const textEl = document.querySelectorAll('.temp-body__description, .temp-body__subheading, p, .temp-body__form, .btn')

        this.slideTween = new gsap.timeline();
        this.slideTween
            .from(this.overlay, 2, {width: "100%"})
            .set(this.overlay, {autoAlpha: 0})
            .from(this.logo, 1, {x: "-100%", autoAlpha: 0}, "-=.3")
            .from(this.heading, .5, {autoAlpha: 0, y: 30}, "-=.2")
            .staggerFrom(textEl, .5, {autoAlpha: 0, y: 30}, 0.08)
            .to(CSSRulePlugin.getRule(".temp-body__heading:after"), 1.8, {
                cssRule: {width: "100%"},
                delay: .4
            })
    }

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
                <div className="temp-right-panel"></div>
            </div>
        )
    }
}

export default TempLanding