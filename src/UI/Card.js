import styles from './Card.module.css'

const Card = props => {
    return <div className={props.section === "add" ? styles.add : props.section === "top" ? styles.top : props.section === "bottom" ? styles.bottom : styles.normal}>{props.children}</div>
}

export default Card;