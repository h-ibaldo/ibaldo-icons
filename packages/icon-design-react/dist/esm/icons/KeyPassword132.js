import { forwardRef } from 'react';

const KeyPassword132 = forwardRef(({
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
    <path d="M14.5,1.999999999998181c-4.14208984375,0-7.5,3.357849121090112-7.5,7.5,0,1.033142089840112.209228515619543,2.017333984369543.587036132809772,2.912963867189319l-5.587036132809772,5.587036132810681v4h4l5.587036132809772-5.587036132810681c.895629882809772.377868652340112,1.879760742190228.587036132810681,2.912963867190228.587036132810681,4.14208984375,0,7.5-3.357849121090112,7.5-7.5s-3.35791015625-7.5-7.5-7.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15" y1="6.999999999998181" x2="17" y2="8.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

KeyPassword132.displayName = 'KeyPassword132';

export default KeyPassword132;
export { KeyPassword132 };
