import React from "react"

const Header = (props) => {
    let header = 'header test'
    let links = props.nav
    let filho = props.children
    return (
        <div>
            <h1>{header}</h1>
            <h4>{links}</h4>
            {filho}
            <hr />
        </div>
    )
}
export default Header