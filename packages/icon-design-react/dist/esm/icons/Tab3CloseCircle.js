import { forwardRef } from 'react';

const Tab3CloseCircle = forwardRef(({
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
    <polyline points="9.025268532090195 21.99877930112325 2.025268532090195 21.99877930112325 2.025268532090195 1.99877930112325 10.025268532090195 1.99877930112325 13.025268532090195 5.99877930112325 22.025268532090195 5.99877930112325 22.025268532090195 8.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.025268532090195 1.99877930112325 22.025268532090195 1.99877930112325 22.025268532090195 5.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <circle cx="16.525268529728237" cy="16.498779303550691" r="5.499999997577106" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.025268532150221" y1="14.99877930112325" x2="15.025268532150221" y2="17.99877930112325" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.025268532219343" y1="14.998779301057766" x2="18.025268532090195" y2="17.998779301192371" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

Tab3CloseCircle.displayName = 'Tab3CloseCircle';

export default Tab3CloseCircle;
export { Tab3CloseCircle };
