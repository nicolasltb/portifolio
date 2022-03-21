import "./styles.css"

type ErrorLineProps = {
    errorString:string
}

export function ErrorLine({errorString}:ErrorLineProps) {
    return (
        <div className="cli-error">
            -bash: {errorString}: command not found
        </div>
    );
}
