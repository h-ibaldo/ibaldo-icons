import { forwardRef } from 'react';

const House10 = forwardRef(({
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
    <polygon points="18.999999999239662 21.000000000842192 4.999999999239662 21.000000000842192 4.999999999239662 13.000000000842192 1.999999999239662 13.000000000842192 11.999999999239662 3.000000000842192 21.999999999239662 13.000000000842192 18.999999999239662 13.000000000842192 18.999999999239662 21.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.999999999239662" y1="4.000000000842192" x2="17.999999999239662" y2="9.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

House10.displayName = 'House10';

export default House10;
export { House10 };
