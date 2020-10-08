import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 80,
    loop: true,
    // for fixed begining of sentence.
    //smartBackspace: true
  });
}

export { loadDynamicBannerText };
