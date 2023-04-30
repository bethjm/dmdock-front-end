import 'bulma/css/bulma.min.css';
import "./PC.css"

const Button = ({ color, text, onClick }) => {
    return <button id="add-pc-button" class="button is-outlined" onClick={onClick} style={{ backgroundColor: color }}>{text}</button>
  }
  export default Button