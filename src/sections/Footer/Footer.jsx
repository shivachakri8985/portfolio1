import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Shiva chakri. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
