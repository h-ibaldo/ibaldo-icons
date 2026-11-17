import { forwardRef } from 'react';

const TechnicalSupportLaptopGear = forwardRef(({
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
    <rect x="1.949462885142566" y="2.000000000480213" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.949462885142566" y1="6.000000000480213" x2="21.949462885142566" y2="6.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.949462885142566" y1="2.000000000480213" x2="5.949462885142566" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.949462885142566 17.000000000480213 12.949462885142566 13.000000000480213 14.949462885142566 15.000000000480213 17.949462885142566 11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TechnicalSupportLaptopGear.displayName = 'TechnicalSupportLaptopGear';

export default TechnicalSupportLaptopGear;
export { TechnicalSupportLaptopGear };
