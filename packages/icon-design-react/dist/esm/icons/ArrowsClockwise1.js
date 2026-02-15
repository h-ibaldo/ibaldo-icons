import { forwardRef } from 'react';

const ArrowsClockwise1 = forwardRef(({
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
    <polyline points="2 13 4 11 6 13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22.000000000100044 11.000000000169166 19.999999999919964 12.999999999989086 18.000000000100044 10.999999999809006" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.581312473929756,7.224193875519632c1.458376179940387-1.956869189469217,3.790532082850405-3.224193875519632,6.418687526070244-3.224193875519632,4.418277998400299,0,8,3.581722001588787,8,8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.418687525650057,16.775806125049712c-1.458376180110463,1.956869189329154-3.790532083140533,3.224193875179481-6.418687526360372,3.224193874950288-4.41827799839939-.000000000400178-7.999999999679858-3.581722002320021-7.999999999289685-8.00000000072032" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowsClockwise1.displayName = 'ArrowsClockwise1';

export default ArrowsClockwise1;
export { ArrowsClockwise1 };
