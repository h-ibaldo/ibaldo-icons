import { forwardRef } from 'react';

const Keypad42 = forwardRef(({
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
    <line x1="2.974731449503452" y1="7.000000000480213" x2="20.974731449503452" y2="7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.974731449503452" y1="12.000000000480213" x2="20.974731449503452" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.974731449503452" y1="17.000000000480213" x2="14.974731449503452" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.974731449503452" y1="2.000000000479304" x2="14.974731449503452" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.974731449503452" y1="2.000000000479304" x2="8.974731449503452" y2="17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="20.974731449503452 2.000000000479304 2.974731449503452 2.000000000479304 2.974731449503452 17.000000000480213 8.974731449503452 17.000000000480213 8.974731449503452 22.000000000480213 14.974731449503452 22.000000000480213 14.974731449503452 17.000000000480213 20.974731449503452 17.000000000480213 20.974731449503452 2.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Keypad42.displayName = 'Keypad42';

export default Keypad42;
export { Keypad42 };
