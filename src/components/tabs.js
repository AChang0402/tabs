import React, { useState } from 'react';

const Tabs = props => {
    const [showMessage, setShowMessage] = useState('')

    const clickTab = (e, content) => {
        setShowMessage(content)
        const tabs = document.getElementsByClassName("tab")
        console.log(tabs)
        for (let i=0; i<tabs.length; i++){
            tabs[i].classList.remove("clicked")
        }
        e.target.classList.add("clicked")
    }

    return (
        <div>

            <div className="tab-container">
                {props.tabData.map((tab) => {
                    return <div className="tab" onClick={ (e) => clickTab(e,tab.content)}>{tab.label}</div>
                })}
            </div>
            <div className="content-container">
                {showMessage}
            </div>
        </div>
    )


}


export default Tabs