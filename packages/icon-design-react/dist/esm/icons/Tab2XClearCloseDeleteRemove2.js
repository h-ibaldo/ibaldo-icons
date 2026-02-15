import { forwardRef } from 'react';

const Tab2XClearCloseDeleteRemove2 = forwardRef(({
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
    <polyline points="13.149805218629808 21.997565477288845 2.050537104500108 21.997565477288845 2.050537104500108 1.997565477288845 11.050537104500108 1.997565477288845 11.050537104500108 5.997565477288845 22.050537104500108 5.997565477288845 22.050537104500108 12.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.050537104500108" y1="1.997565477288845" x2="15.050537104500108" y2="1.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.050537104500108" y1="16.997565477288845" x2="22.050537104500108" y2="21.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.050537104500108" y1="16.997565477288845" x2="17.050537104500108" y2="21.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tab2XClearCloseDeleteRemove2.displayName = 'Tab2XClearCloseDeleteRemove2';

export default Tab2XClearCloseDeleteRemove2;
export { Tab2XClearCloseDeleteRemove2 };
