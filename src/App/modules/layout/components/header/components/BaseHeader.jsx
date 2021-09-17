import React from "react";
import "../css/header.css"
import { Layout } from "antd";

const { Header } = Layout;

const BaseHeaderComponent = ( ) => {
    return (
        <>
            <Header className="base-header" >
                <div className="logo" />
            </Header>
        </>
    );
}

export default BaseHeaderComponent;
