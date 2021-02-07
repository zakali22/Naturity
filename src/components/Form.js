import React, {useState} from "react"

function Form(){
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    const handleInputChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true)
    }

    return (
        <React.Fragment>
            {!submitted ? (
                <form className="form temp-body__form" onSubmit={handleSubmit}>
                    <input className="form__input" name="email" type="text" value={email} placeholder="email" onChange={handleInputChange}/>
                    <button className="btn btn--white">Sign up</button>
                </form>
            ) : (
                <h3 style={{maxWidth: "90%"}}>Thank you for subscribing to our notification, we'll notify you when our site goes live</h3>
            )}

        </React.Fragment>
    )
}

export default Form