import { h } from 'preact';

import styles from './Nav.module.scss';

export default function Nav({ withHome }) {
  const navExtraClass = withHome ? 'with-home' : 'without-home';
  const navClasses = `${styles.nav} ${styles[navExtraClass]}`;

  return (
    <nav className={navClasses}>
      {withHome && <a href='/'>welcome</a>}
      <ul>
        <li>
          <a href='/cv'>CV</a>
        </li>
        <li>
          <a href='/writings'>writings</a>
        </li>
        <li>
          <a href='/projects'>projects</a>
        </li>
      </ul>
    </nav>
  );
}
