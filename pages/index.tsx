import styles from './index.scss';
import Link from 'next/link';

export default () => <div className={styles.div}>
    Welcome
    <img src="./static/promt.png" alt="prompt"/>
    <div>
        <Link href="/about" prefetch><a>About</a></Link>
    </div>
</div>
