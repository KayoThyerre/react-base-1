import './button.css'

const Button = ({label, showLabel}) => {
    return (
        <button
        className='btn'
        label={label}
        onClick={() => showLabel(label)}>
            Botão
        </button>
    )
}

Button.defaultProps = {
    label: 'botão daora'
}


export default Button;