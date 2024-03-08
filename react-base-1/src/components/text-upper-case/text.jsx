import './text.css'

function Text(props) {
    return (
        <div className="text-box">
            <h1>Bem vindo ao paragrafo todo maiúsculo ! 😁</h1>
            <p 
            className='text' 
            style={{color: props.color}}>
                {props.text}
            </p>
        </div>
    )
}

Text.defaultProps = {
    text: 'Este é um texto bem bão.',
    color: 'cyan'
}

export default Text;