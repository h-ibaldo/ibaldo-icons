import { forwardRef } from 'react';

const Vpn1 = forwardRef(({
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
    <polyline points="2.016630450972116 8.000000000480213 4.516630450972116 16.000000000480213 7.016630450972116 8.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.516630450972116" y1="8.000000000476575" x2="10.516630450972116" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.516630450972116,8.000000000476575h2c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.104569499661011-.895430500338989,2-2,2h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22.016630450972116 8.000000000480213 22.016630450972116 16.000000000480213 18.016630450972116 8.000000000476575 18.016630450972116 16.000000000476575" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Vpn1.displayName = 'Vpn1';

export default Vpn1;
export { Vpn1 };
