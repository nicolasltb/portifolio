import { useState } from "react"
import { CMDLine } from "../CMDLine"
import { ErrorLine } from "../ErrorLine"
import "./styles.css"

export function Terminal() {

    type command = {
        type:string,

    }

    const [lines, setLines] = useState([0]);

    function createNewLine(e:command) {
        setLines(prev => [...prev, 0]);
    }

    return (
        <>
            <h1 className="title">Nicolas Lopes's Server 🖥️</h1>
            <div className="cmd-window">
                {
                lines.map((_, i, list) => (
                    <>
                    <CMDLine isDisabled={i === list.length-1 ? false : true} createNewLine={createNewLine}></CMDLine>
                    <ErrorLine errorString={"whoami"}></ErrorLine>
                    </>
                    
                ))
                }
            </div>
        </>
    );
}