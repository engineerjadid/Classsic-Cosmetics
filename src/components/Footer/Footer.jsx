import React from 'react';
import Logo from '../../assets/logo.png';

import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <span>Gazipur, Dhaka, Bangladesh</span>
                    </span>
                    <span><a href="tel:01713536508">01713536508</a></span>
                    <span><a href="mailto:engrjadid@gmail.com">engrjadid@gmail.com</a></span>

                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <span>Sign In</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <span>About Us</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <span>Safety Privacy & Terms</span>
                    </span>
                </div>
            </div>

        </div>

        <hr />
        <div className={css.copyRight}>
            <span>&copy; 2023 Classsic, Inc. | Jadid</span>
            <span>All rights reserved</span>
        </div>

    </div>
  )
}

export default Footer