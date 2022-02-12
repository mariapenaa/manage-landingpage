import './Button.scss';

const Button = (props) => {
    let {text, color, disabled} = props;

    return (
        <button className="button" style={color === 'orange' ? (disabled ? styles.disabled : styles.button) : styles.buttonWhite}
        onClick={()=>props.send()}>
            {text}
        </button>
    );
}

const styles = {
    disabled: {
        cursor:'pointer',
        backgroundColor:'#cbcbcb',
        borderRadius:40,
        padding:'0.7rem 2rem',
        textTransform:'capitalize',
        fontFamily:'Be Vietnam Pro, sans-serif',
        border:'none',
        color:'white',
        fontSize:'0.8rem',
        boxShadow:'0px 14px 61px -28px rgba(0,0,0,0.75)'
    },
    button: {
        cursor:'pointer',
        backgroundColor:'hsl(12, 88%, 59%)',
        borderRadius:40,
        padding:'0.7rem 2rem',
        textTransform:'capitalize',
        fontFamily:'Be Vietnam Pro, sans-serif',
        border:'none',
        color:'white',
        fontSize:'0.8rem',
        boxShadow:'0px 14px 61px -28px rgba(0,0,0,0.75)'
/*         -webkit-box-shadow: -2px 14px 61px -28px rgba(0,0,0,0.75);
        -moz-box-shadow */
    },
    buttonWhite: {
        backgroundColor:'hsl(0, 0%, 98%)',
        borderRadius:40,
        padding:'0.7rem 2rem',
        textTransform:'capitalize',
        fontFamily:'Be Vietnam Pro, sans-serif',
        border:'none',
        color:'hsl(12, 88%, 59%)',
        fontSize:'0.8rem',
        boxShadow:'0px 14px 61px -28px rgba(0,0,0,0.75)'
/*         -webkit-box-shadow: -2px 14px 61px -28px rgba(0,0,0,0.75);
        -moz-box-shadow */
    }
}
;
export default Button;