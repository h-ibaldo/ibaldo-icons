import { forwardRef } from 'react';

const PopUp7 = forwardRef(({
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
    <path d="M19,4h-5.000000238899702l-1.999999761100298-2-1.999999761090294,2h-5.000000238909706c-1.104569499660101,0-2,.895430500338989-2,2v14c0,1.104569499661011.895430500339899,2,2,2h14c1.104569499670106,0,2-.895430500338989,2-2V6c0-1.104569499661011-.895430500329894-2-2-2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.060537104500327" y1="16.997565477289754" x2="8.050537104500108" y2="16.997565477289754" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.060537104500327" y1="12.997565477289754" x2="8.050537104500108" y2="12.997565477289754" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.060537104500327" y1="8.997565477289754" x2="8.050537104500108" y2="8.997565477289754" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="17" x2="16" y2="17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="13" x2="16" y2="13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="9" x2="16" y2="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PopUp7.displayName = 'PopUp7';

export default PopUp7;
export { PopUp7 };
