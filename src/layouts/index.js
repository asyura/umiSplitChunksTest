import styles from './index.css';
import Link from 'umi/link';

function BasicLayout(props) {
	return (
		<div className={styles.normal}>
			<h1 className={styles.title}>
				<Link to='/'>home</Link>
				Yay! Welcome to umi!
				<Link to='/chart'>chart</Link>
			</h1>
			{props.children}
		</div>
	);
}

export default BasicLayout;
