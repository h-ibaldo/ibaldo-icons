import { forwardRef } from 'react';

const Tag32 = forwardRef(({
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
    <path d="M19.974731437872833,18.998779299525268h-11.080130155050938c-.583849774500777,0-1.138548808090491-.255125457006216-1.518513204739065-.698417253086518l-4.285714285710128-5c-.641982393690341-.748979459309339-.641982393690341-1.854186034517625,0-2.603165493823326l4.285714285710128-5c.379964396648575-.443291796080302.934663430238288-.698417253090156,1.518513204739065-.698417253090156h11.080130155050938c1.104569499668287,0,2,.895430500338989,2,2v10c0,1.104569499661011-.895430500331713,2-2,2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.974731437872833" cy="11.998779299525268" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tag32.displayName = 'Tag32';

export default Tag32;
export { Tag32 };
