import { forwardRef } from 'react';

const WebsitePortalCamera = forwardRef(({
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
    <path d="M22.000000003630703,10.999999999998181l-.000000003630703-7c0-1.104569499661011-.895430500338989-2-2-2H4c-1.104569499670106,0-2,.895430500338989-2,2v16c0,1.104569499664649.895430500329894,2,2,2h2.000000003630703" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.035268549516331" y1="4.998782739598028" x2="5.025268549516113" y2="4.998782739598028" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.035268549516331" y1="4.998782739598028" x2="8.025268549516113" y2="4.998782739598028" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.000000003630703" y1="4.999999999998181" x2="11.000000003630703" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000003630703" y1="7.999999999998181" x2="22.000000003630703" y2="7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="18.025268549516113 18.998782739598028 18.025268549516113 17.998782739598028 22.025268549516113 14.998782739598028 22.025268549516113 21.998782739598028 18.025268549516113 18.998782739598028" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.025268549516113,16.998782739598028h8v4c0,.551915024494001-.448084975505999,1-1,1h-6c-.551915024494001,0-1-.448084975505999-1-1v-4h0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.525268549516113" cy="14.498782739598937" r="2.499999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.525268549516113" cy="14.498782739598937" r="2.499999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WebsitePortalCamera.displayName = 'WebsitePortalCamera';

export default WebsitePortalCamera;
export { WebsitePortalCamera };
