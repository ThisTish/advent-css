"use client"

import styles from './day2.module.css'

const DayTwoPage = () => {

	return (

		<div>
			<h1>Day Two</h1>
			<div className={styles['toggle-wrapper']}>
				<input type='checkbox' id='toggle' className={styles["toggle-unchecked"]} />
				<span className={styles["toggle-button"]}></span>
				<svg width="61" height="45" viewBox="0 0 61 45" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles["check"]}>
					<path fillRule="evenodd" clipRule="evenodd" d="M48.7498 2.28142C51.3913 -0.359957 55.6739 -0.359921 58.3153 2.28153C60.7556 4.72181 60.9404 8.55699 58.8749 11.2134L58.8041 11.3044L58.3963 11.7663L27.5701 42.5925C25.1298 45.0327 21.2946 45.2175 18.6382 43.152L18.5472 43.0812L18.0853 42.6734L2.63175 27.2198C-0.00973761 24.5784 -0.00973773 20.2957 2.63175 17.6542C5.07203 15.2139 8.9072 15.0291 11.5636 17.0946L11.6546 17.1654L12.1164 17.5731L22.7871 28.2419L48.7498 2.28142C48.7498 2.28138 48.7497 2.28146 48.7498 2.28142Z" fill="#00FF94" />
				</svg>
			</div>
		</div>

	);
}

export default DayTwoPage;