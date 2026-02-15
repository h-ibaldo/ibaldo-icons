import { forwardRef } from 'react';

const TranslationLanguagesArrows2 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <polyline points="9.025268548975873 21.997565476121054 12.025268548975873 13.997565476121054 15.025268548975873 21.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.025268548975873" y1="1.997565476121054" x2="2.025268548975873" y2="9.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.025268548975873" y1="9.997565476121054" x2="6.025268548975873" y2="9.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.025268548975873" y1="1.997565476121054" x2="6.025268548975873" y2="1.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.025268548975873" y1="5.997565476121054" x2="5.025268548975873" y2="5.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.025268548975873 9.997565476121054 9.025268548975873 1.997565476121054 13.025268548975873 9.997565476121054 13.025268548975873 1.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.025268548975873" y1="19.997565476117416" x2="14.025268548975873" y2="19.997565476117416" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.025268548975873" y1="21.997565476121054" x2="18.025268548975873" y2="13.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.025268548975873,13.997565476121054h2.000001999999768c1.1045683950897,0,1.999998000000232.895429604908713,1.999998000000232,1.999997999999323v.000004000001354c0,1.10456839509061-.895429604910532,1.999997999999323-1.999998000000232,1.999997999999323h-2.000001999999768" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.025268548975873" y1="17.997565476121054" x2="22.025268548975873" y2="21.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <polyline points="22.025268548975873 8.997565476121054 22.025268548975873 4.997565476121054 17.025268548975873 4.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="19.025268548975873 2.997565476121054 17.025268548975873 4.997565476121054 19.025268548975873 6.997565476121054" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <g>
    <polyline points="2.025268549246903 14.997565475851843 2.025268548886743 18.997565475851843 7.025268548886743 18.997565476390264" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="5.025268548706663 20.997565476208365 7.025268548886743 18.997565476390264 5.025268549065004 16.997565476208365" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

TranslationLanguagesArrows2.displayName = 'TranslationLanguagesArrows2';

export default TranslationLanguagesArrows2;
export { TranslationLanguagesArrows2 };
