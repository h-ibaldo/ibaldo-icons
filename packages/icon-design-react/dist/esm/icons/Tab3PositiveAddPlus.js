import { forwardRef } from 'react';

const Tab3PositiveAddPlus = forwardRef(({
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
    <polygon points="22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 10.025268532079281 1.99877930112325 13.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.025268532079281 1.99877930112325 22.025268532079281 1.99877930112325 22.025268532079281 5.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268532079281" y1="9.99877930112325" x2="12.025268532079281" y2="16.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.525268532079281" y1="13.49877930112325" x2="8.525268532079281" y2="13.49877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tab3PositiveAddPlus.displayName = 'Tab3PositiveAddPlus';

export default Tab3PositiveAddPlus;
export { Tab3PositiveAddPlus };
