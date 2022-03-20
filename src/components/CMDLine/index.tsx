import "./styles.css"

type CMDLineProps = {
    isDisabled:boolean,
    handler:Function
}

export function CMDLine({isDisabled, handler}:CMDLineProps) {
    return (
        <div className="cli">
            [user@nicolas-server ~]$&nbsp;

            <input className="input-cli"
            type="text"
            onBlur={({ target }) => target.focus()}
            autoFocus 
            disabled={isDisabled} 
            onKeyDown={(e) => e.key === "Enter" ? handler(e) : null}
            />
        </div>
    );
}
