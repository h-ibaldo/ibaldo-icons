import { forwardRef } from 'react';

const TouchScreenTwoFingersSwipeRight2 = forwardRef(({
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
    viewBox="0 0 24 24.000000000001819"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <polyline points="19.000000000129148 2.999999999865395 22 6 18.999999999869033 8.999999999865395" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14" y1="5.99999999963984" x2="22" y2="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="5.999999999997272" cy="5.99999999928059" r="4.000000000001819" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19.000000000129148 14.999999999865395 22 18 18.999999999869033 20.999999999865395" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14" y1="17.99999999963984" x2="22" y2="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="5.999999999997272" cy="17.99999999928059" r="4.000000000001819" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TouchScreenTwoFingersSwipeRight2.displayName = 'TouchScreenTwoFingersSwipeRight2';

export default TouchScreenTwoFingersSwipeRight2;
export { TouchScreenTwoFingersSwipeRight2 };
