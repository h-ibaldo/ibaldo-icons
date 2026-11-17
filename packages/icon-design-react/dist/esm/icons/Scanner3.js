import { forwardRef } from 'react';

const Scanner3 = forwardRef(({
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
    <polygon points="20.999999981189831 18.999996564258254 2.999999981189831 18.999996564258254 4.999999981189831 8.999996564258254 18.999999981189831 8.999996564258254 20.999999981189831 18.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.999999981189831,8.999996564258254l2-6h0c0-.552284749832324-.447715250169495-1-1-1H3.999999981189831c-.5522847498396,0-1,.447715250167676-1,1h0l2,6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.999999981189831,18.999996564258254h18v2c0,.551915024494001-.448084975505999,1-1,1H3.999999981189831c-.551915024494,0-1-.448084975505999-1-1v-2h0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999981189831" y1="14.999996564258254" x2="16.999999981189831" y2="14.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Scanner3.displayName = 'Scanner3';

export default Scanner3;
export { Scanner3 };
