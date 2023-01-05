import React from 'react';

const Footer = () => {
  return (
    <>
        <div className="footer__container">
            <a className='google__drive__link' href="https://drive.google.com/drive/u/0/folders/19CVUJFsb7fCSS4U2r0GuZGebGdkl4ioA" target="_blank">
                Google Drive Folder
            </a>
            <p className='socials__title'>
                My socials:
                <span className='socials__span'>
                    <a target='_blank' href="https://www.instagram.com/z4cky_bene/?hl=en" className='social__link'>
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a target='_blank' href="https://twitter.com/PeacefullTitan" className='social__link'>
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a target='_blank' href="#" className='social__link'>
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </span>
            </p>
        </div>
    </>
  )
}

export default Footer;