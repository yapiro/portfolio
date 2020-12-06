import './Button.css';

const Button = (props)=>{
    let {onClickHandler} = props;
    return(
        <div className = 'Button-container' onClick = {onClickHandler}>
            {props.children}
        </div>
    )
}

export default Button;