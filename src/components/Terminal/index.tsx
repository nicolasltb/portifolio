import { CMDLine } from "../CMDLine"
import "./styles.css"

export function Terminal() {

    function handler(e:any) {
        console.log(`Nicolas ${e.key}`)
    }

    return (
        <>
            <h1 className="title">Nicolas Lopes's Server 🖥️</h1>
            <div className="cmd-window">
                <CMDLine isDisabled={false} handler={handler}></CMDLine>
            </div>
        </>
    );
}