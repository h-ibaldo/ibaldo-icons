import { forwardRef } from 'react';

const LoadingBar6 = forwardRef(({
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
    <line x1="2.984731449512765" y1="11.000000000480213" x2="2.974731449512547" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.984731449512765" y1="11.000000000480213" x2="5.974731449512547" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.984731449512765" y1="11.000000000480213" x2="8.974731449512547" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.984731449512765" y1="11.000000000480213" x2="11.974731449512547" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.974731449501633" y1="15.000000000480213" x2="13.974731449501633" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.984731449512765" y1="13.000000000480213" x2="4.974731449512547" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.984731449512765" y1="13.000000000480213" x2="7.974731449512547" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.984731449512765" y1="13.000000000480213" x2="10.974731449512547" y2="13.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974731449501633" y="8.999999993041456" width="20" height="6.000000014876605" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LoadingBar6.displayName = 'LoadingBar6';

export default LoadingBar6;
export { LoadingBar6 };
