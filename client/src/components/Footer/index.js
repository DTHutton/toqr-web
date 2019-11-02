import React from "react"
import "./style.css"

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <a className="grey-text text-lighten-4 col s2" href="#">Molly Portfolio</a>
                        <a className="grey-text text-lighten-4 col s2" href="#">Derek Portfolio</a>

                        <div className="grey-text text-lighten-4 col s4">© 2019 Copyright Text</div>

                        <a className="grey-text text-lighten-4 col s2" href="#">Contact</a>
                        <a className="grey-text text-lighten-4 col s2" href="#">Github Repo</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer