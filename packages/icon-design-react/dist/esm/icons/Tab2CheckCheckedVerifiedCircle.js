import { forwardRef } from 'react';

const Tab2CheckCheckedVerifiedCircle = forwardRef(({
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
    <g>
    <circle cx="17.025268532090195" cy="16.99877930112325" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="15.525268532090195 16.998779298696718 16.525268532090195 17.998779303549782 18.525268532090195 15.998779298696718" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <polyline points="10.025268532090195 21.99877930112325 2.025268532090195 21.99877930112325 2.025268532090195 1.99877930112325 11.025268532090195 1.99877930112325 11.025268532090195 5.99877930112325 22.025268532090195 5.99877930112325 22.025268532090195 9.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.025268532090195" y1="1.99877930112325" x2="15.025268532090195" y2="1.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tab2CheckCheckedVerifiedCircle.displayName = 'Tab2CheckCheckedVerifiedCircle';

export default Tab2CheckCheckedVerifiedCircle;
export { Tab2CheckCheckedVerifiedCircle };
