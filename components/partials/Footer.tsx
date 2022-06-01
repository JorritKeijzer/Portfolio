import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p>Jorrit Keijzer. Copyright and stuff. Made with ❤️ in Amsterdam, by me :)</p>
      <div>
        <a href="https://twitter.com/jorritkeyzer">Twitter</a>
        <a href="https://github.com/JorritKeijzer">Github</a>
        <a href="https://www.linkedin.com/in/jorrit-keijzer/">LinkedIn</a>
        <a href="https://jorritkeijzer.dev">jorritkeijzer.dev</a>
      </div>
    </div>
  );
};

export default Footer;
