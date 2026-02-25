import { forwardRef } from 'react';

const SaveSaquareLineDown2 = forwardRef(({
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
    <polyline points="8.949462885140747 11.000000000480213 11.949462885140747 14.000000000480213 14.949462885140747 11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.949462885140747,13.000000000480213V5.000000000480213c0-1.656854249493335,1.343145750512122-3,3-3h4c1.656854249493335,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750506665,3-3,3H4.949462885140747c-1.656854249487878,0-3-1.343145750506665-3-3V5.000000000480213c0-1.656854249493335,1.343145750512122-3,3-3h3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SaveSaquareLineDown2.displayName = 'SaveSaquareLineDown2';

export default SaveSaquareLineDown2;
export { SaveSaquareLineDown2 };
