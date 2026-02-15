import { forwardRef } from 'react';

const TouchScreenTwoFingersSwipeUp1 = forwardRef(({
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
    <polyline points="20.974731437145238 6.998779299483431 17.974731436876027 3.998779299752641 14.974731437145238 6.998779300021852" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731437596347" y1="11.998779299752641" x2="17.974731436876027" y2="3.998779299752641" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.974731437956052" cy="15.998779299752641" r="3.999999999999773" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731437145238 6.99877929894501 5.974731436876027 3.99877929921422 2.974731437145238 6.998779299483431" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.974731437596347" y1="11.99877929921422" x2="5.974731436876027" y2="3.99877929921422" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="5.974731437956052" cy="15.99877929921422" r="3.999999999999773" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TouchScreenTwoFingersSwipeUp1.displayName = 'TouchScreenTwoFingersSwipeUp1';

export default TouchScreenTwoFingersSwipeUp1;
export { TouchScreenTwoFingersSwipeUp1 };
