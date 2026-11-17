import { forwardRef } from 'react';

const EyeView4 = forwardRef(({
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
    <circle cx="12.075805663474966" cy="11.997565472718634" r="4.999999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.075805663474966,12.020331586000793c-2.27978515625-3.0439453125-5.904296875-5.02276611328125-10-5.02276611328125s-7.72021484375,1.97882080078125-10,5.02276611328125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

EyeView4.displayName = 'EyeView4';

export default EyeView4;
export { EyeView4 };
