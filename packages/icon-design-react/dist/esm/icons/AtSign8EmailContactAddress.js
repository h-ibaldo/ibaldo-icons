import { forwardRef } from 'react';

const AtSign8EmailContactAddress = forwardRef(({
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
    <rect x="9.974731453685877" y="9.000000000246018" width="3.999999997226723" height="5.999999999999091" rx="1.999997995204163" ry="1.999997995204163" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.974731450050967,19.00000000046839h-4c-2.20913899932566,0-4-1.790861000676159-4-4v-5.999999999998181c0-2.209138999322022,1.79086100067434-4,4-4h4c2.209138999322022,0,4,1.790861000677978,4,4v1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.974731450050967,13.00000000046839v.000001999998858c0,1.104568388795087.895429604908713,1.999998000001142,1.999997999999323,1.999998000001142h.000004000001354c1.10456839509061,0,1.999997999999323-.895429604905985,1.999997999999323-1.999998000001142v-2.000001999998858" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

AtSign8EmailContactAddress.displayName = 'AtSign8EmailContactAddress';

export default AtSign8EmailContactAddress;
export { AtSign8EmailContactAddress };
