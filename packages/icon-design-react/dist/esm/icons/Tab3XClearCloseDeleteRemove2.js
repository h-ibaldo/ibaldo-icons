import { forwardRef } from 'react';

const Tab3XClearCloseDeleteRemove2 = forwardRef(({
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
    <polygon points="22.025268532079281 21.998779297172405 2.025268532079281 21.998779297172405 2.025268532079281 1.998779297172405 10.025268532079281 1.998779297172405 13.025268532079281 5.998779297172405 22.025268532079281 5.998779297172405 22.025268532079281 21.998779297172405" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.025268532079281 1.998779297172405 22.025268532079281 1.998779297172405 22.025268532079281 5.998779297172405" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.025268532079281" y1="16.998779297172405" x2="9.025268532079281" y2="10.998779297172405" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.025268532079281" y1="10.998779297172405" x2="9.025268532079281" y2="16.998779297172405" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tab3XClearCloseDeleteRemove2.displayName = 'Tab3XClearCloseDeleteRemove2';

export default Tab3XClearCloseDeleteRemove2;
export { Tab3XClearCloseDeleteRemove2 };
