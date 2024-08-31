import estilo from "./components.module.css"
function Result({value}) {
    return (
      <div className={estilo.result}> {value}</div>
    )
}

export default Result;