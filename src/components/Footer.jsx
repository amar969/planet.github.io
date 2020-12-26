import { waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();
    return (
    <footer>
        <p>Copyright © Amarjeet Maurya {currentYear}</p>
    </footer>
    );
}

export default Footer;