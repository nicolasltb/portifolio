import "./styles.css"

type CMDLineProps = {
    isDisabled:boolean,
    createNewLine:Function
}

export function CMDLine({isDisabled, createNewLine}:CMDLineProps) {
    return (
        <div className="cli">
            [user@nicolas-server ~]$&nbsp;

            <input className="input-cli"
            type="text"
            onBlur={({ target }) => target.focus()}
            autoFocus 
            disabled={isDisabled} 
            onKeyDown={(e) => e.key === "Enter" ? createNewLine(e) : null}
            />
        </div>
    );
}
