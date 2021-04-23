import React from "react"

class Section extends React.Component {
    render(){
        return(
            <div>
                <section className ="page" data-match="/">
                    <h1>Home Page</h1>
                </section>
                <section className ="page" data-match="/about">
                    <h1>Aout Page</h1>
                </section>
                <section className ="page" data-match="/">
                    <h1>Contact Page</h1>
                </section>
            </div>
        )
    }
} 
export default Section