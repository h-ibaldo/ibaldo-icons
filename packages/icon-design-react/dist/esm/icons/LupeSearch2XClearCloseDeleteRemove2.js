import { forwardRef } from 'react';

const LupeSearch2XClearCloseDeleteRemove2 = forwardRef(({
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
    <circle cx="10.000000018382707" cy="9.99877930438015" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.656860369943388" y1="15.65563965594265" x2="22.000000018382707" y2="21.99877930438015" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000018382707" y1="7.99877930438015" x2="8.000000018382707" y2="11.99877930438015" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000018382707" y1="7.99877930438015" x2="12.000000018382707" y2="11.99877930438015" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeSearch2XClearCloseDeleteRemove2.displayName = 'LupeSearch2XClearCloseDeleteRemove2';

export default LupeSearch2XClearCloseDeleteRemove2;
export { LupeSearch2XClearCloseDeleteRemove2 };
