import { forwardRef } from 'react';

const BrowserWindowConnection = forwardRef(({
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
    <path d="M9.499999993649908,21.998779299956368H3.999999993649908c-1.104569499660101,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500339899-2,2-2h16c1.104569499660101,0,2,.895430500338989,2,2v5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993649908" y1="7.998779299956368" x2="21.999999993649908" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.499999993659912" cy="16.498779299955459" r="5.499999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.999999993649908" y1="16.498779299956368" x2="21.999999993649908" y2="16.498779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.619506829590136,21.884155276518868l.312927246090112-1.1474609375c.756774902339203-2.77459716796875.756774902339203-5.70123291015625,0-8.475830078125l-.312927246090112-1.1474609375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.472900384269451,11.098083499175118l-.317077636709655,1.16278076171875c-.756713867200233,2.77459716796875-.756713867200233,5.70123291015625,0,8.475830078125l.317077636709655,1.16278076171875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.98473144503987" y1="4.923217770028714" x2="4.974731445039652" y2="4.923217770028714" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.98473144503987" y1="4.923217770028714" x2="7.974731445039652" y2="4.923217770028714" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.974731445039652" y1="4.923217770028714" x2="10.974731445039652" y2="4.923217770028714" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BrowserWindowConnection.displayName = 'BrowserWindowConnection';

export default BrowserWindowConnection;
export { BrowserWindowConnection };
