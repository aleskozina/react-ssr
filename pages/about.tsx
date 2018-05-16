import Link from 'next/link';
import styles from './about.scss';

export default () => <div className={styles.About}>
    About
    <Link href="/index" prefetch><a>Index</a></Link>
    </div>