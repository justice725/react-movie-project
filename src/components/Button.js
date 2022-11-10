import PropTypes from "prop-types";
import styles from "./Button.module.css"; // 모듈 css 파일은 해당 js페이지 하나에만 적용 가능한 css파일이다. 이를 사용하려면 컴포넌트를 사용하듯이 styles.btn과 같이 하나의 css 특성을 가져오도록 사용할 수 있다.

function Button({text}) {
    return(
        <button className={styles.btn}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;