import { forwardRef } from 'react';

const BrowserWindowFlashlight1 = forwardRef(({
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
    <path d="M5.974731445039652,21.923217770028714h-2c-1.104569499659192,0-2-.895430500338989-2-2V3.923217770028714c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499660101,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500339899,2-2,2h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731445039652" y1="7.923217770028714" x2="21.974731445039652" y2="7.923217770028714" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.98473144503987" y1="4.923217770028714" x2="4.974731445039652" y2="4.923217770028714" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.98473144503987" y1="4.923217770028714" x2="7.974731445039652" y2="4.923217770028714" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.974731445039652" y1="4.923217770028714" x2="10.974731445039652" y2="4.923217770028714" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="12.974731445039652 21.999999996591214 12.974731445039652 17.923217770028714 14.974731445039652 15.999999996591214 8.974731445039652 15.999999996591214 10.974731445039652 17.923217770028714 10.974731445039652 21.999999996591214 12.974731445039652 21.999999996591214" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.974731445039652" y1="17.923217770028714" x2="10.974731445039652" y2="17.923217770028714" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.974731445039652" y1="10.999999996591214" x2="9.974731445039652" y2="12.99999999654392" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.974731444999634" y1="10.99999999654392" x2="13.974731445039652" y2="12.999999996591214" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BrowserWindowFlashlight1.displayName = 'BrowserWindowFlashlight1';

export default BrowserWindowFlashlight1;
export { BrowserWindowFlashlight1 };
