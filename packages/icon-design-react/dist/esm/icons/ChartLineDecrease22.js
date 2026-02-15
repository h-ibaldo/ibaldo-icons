import { forwardRef } from 'react';

const ChartLineDecrease22 = forwardRef(({
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
    <polyline points="2 2 2 22 22 22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22.000000000320142 17.99999999963984 19.000000000050932 11.999999999770807 17.00000000018008 14.999999999869033 13.999999999909051 9 10.000000000090949 13.000000000178261 5.999999999690772 4.00000000036016" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartLineDecrease22.displayName = 'ChartLineDecrease22';

export default ChartLineDecrease22;
export { ChartLineDecrease22 };
