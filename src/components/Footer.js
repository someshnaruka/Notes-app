import React from "react";

const Footer=(props)=>{
    const year=new Date();
    const copyRight=year.getFullYear();

    return (
        <footer>
         <p>CopyRight © {copyRight}</p>
        </footer>
    );
};

export default Footer;