import { Link } from 'react-router';
import type { ReactElement } from 'react';
import styles from './home-page.module.css';

export const HomePage = (): ReactElement => {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Доброго времени суток!</h1>
      <p className={styles.subtitle}>Тестовое задание — React 19+ mini-app</p>
      <p className={styles.description}>
        Небольшое приложение из двух страниц. На этой странице — приветствие. На второй —
        интерактивное меню с чекбоксами и подсчётом значений. От версии с ангуляром отличается только
        тем, что написано на реакте, а не на ангуляре.
      </p>
      <Link className={styles.link} to="/menu">
        → Перейти к меню
      </Link>
      <a
        className={styles.link}
        href="https://bdcry.github.io/angular-selectel-test/#/"
        target="_blank"
        rel="noopener noreferrer">
        → Ссылка на версию с ангуляром
      </a>
      <a
        className={styles.link}
        href="https://github.com/bdcry/react-test"
        target="_blank"
        rel="noopener noreferrer">
        → Ссылка на исходный код
      </a>
    </section>
  );
};
