import React from "react";
import {ReactComponent as LogoImage} from "../assets/Logo1.svg"
import Social from "../components/Social"

function TempLanding(){
    return (
        <div className="temp-main">
            <div className="temp-left-panel">
                <header className="temp-header">
                    <a href="#"><LogoImage /></a>
                </header>
                <div className="temp-body">
                    <h1 className="p temp-body__heading">Coming Soon<span className="fill-green">.</span></h1>
                    <div className="temp-body__description">
                    <h2 className="temp-body__subheading">Who are we<span className="fill-green fill-green--question-mark">?</span></h2>
                    <p>We have been producing Natural Aromatherapy and Skincare Products since 2014. We have a passion for Producing Natural Skincare and Aromatherapy products which aren't only super natural in their origins, but effective in giving you wonderful skin and a rejuvenated mind. Using botanical extracts, we take the natural properties of plants to renew, regenerate and revive and include them in our skincare products to produce highly effective, indulgent skincare products that give visible results to your skin, whilst maintaining our ethics of provenance and naturalness.</p>

                    <h2 className="temp-body__subheading">Get notified<span className="fill-green">.</span></h2>
                    <form className="form temp-body__form">
                        <input className="form__input" name="email" type="text" value="" placeholder="email" />
                        <button className="btn btn--white">Sign up</button>
                    </form>

                    <Social />
                    
                    </div>
                </div>
            </div>
            <div className="temp-right-panel"></div>
        </div>
    )
}

export default TempLanding