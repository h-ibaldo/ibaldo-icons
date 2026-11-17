import { forwardRef } from 'react';

const Scanner4 = forwardRef(({
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
    <polygon points="1.999999981189831 10.999996564258254 1.999999981189831 16.999996564258254 17.999999981189831 7.999996564258254 17.999999981189831 1.999996564258254 1.999999981189831 10.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.999999981189831,16.999996564258254h20v3c0,1.103830048988002-.896169951011998,2-2,2H3.999999981189831c-1.103830048988,0-2-.896169951011998-2-2v-3h0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.999999981189831" y1="18.999996564258254" x2="17.999999981189831" y2="16.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999981189831" y1="10.999996564258254" x2="14.999999981189831" y2="16.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.999999981189831 16.999996564258254 21.999999981189831 16.999996564258254 21.999999981189831 10.999996564258254 12.666686992899486 10.999996564258254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Scanner4.displayName = 'Scanner4';

export default Scanner4;
export { Scanner4 };
