import styles from './style.module.css'

function SVGUser() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 48 48"
      width="1.5rem"
      height="1.5rem"
      className={styles.svg_user}
      id="user"
      fill="#ffc107"
    >
      <path d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z"></path>
      <circle cx="24" cy="16" r="12"></circle>
    </svg>
  )
}

export default SVGUser
