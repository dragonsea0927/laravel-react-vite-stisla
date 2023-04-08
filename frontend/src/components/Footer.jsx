import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-left">
                Copyright &copy; 2023 <div className="bullet"></div> Re-created
                By
                <a href="https://github.com/fhmiibrhimdev"> Fahmi Ibrahim</a>
            </div>
            <div className="footer-right">0.1.0</div>
        </footer>
    );
}