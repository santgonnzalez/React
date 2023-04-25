
const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback} style={{ backgroundColor: 'orange', color: 'white'}}>{props.label}</button>
}


export default Button