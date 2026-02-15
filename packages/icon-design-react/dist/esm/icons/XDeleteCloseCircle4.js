import { forwardRef } from 'react';

const XDeleteCloseCircle4 = forwardRef(({
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
    <circle cx="11.999999990779543" cy="12.000000000448836" r="8.000000000000227" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999990879587" y1="14.000000000806722" x2="13.999999990699507" y2="10.000000000986802" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999990610377" y1="14.000000000894943" x2="9.999999990970537" y2="10.000000000897671" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

XDeleteCloseCircle4.displayName = 'XDeleteCloseCircle4';

export default XDeleteCloseCircle4;
export { XDeleteCloseCircle4 };
