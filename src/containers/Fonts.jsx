const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500&amp;subset=latin-ext';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const font = new FontFaceObserver('IBM Plex Sans');

  font.load().then(() => {
    document.documentElement.classList.add('IBM-Plex-Sans');
  });
};

export default Fonts;
