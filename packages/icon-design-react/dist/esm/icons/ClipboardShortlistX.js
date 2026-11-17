import { forwardRef } from 'react';

const ClipboardShortlistX = forwardRef(({
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
    <line x1="21.974731440210235" y1="17.000000003885361" x2="16.974731440210235" y2="22.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.974731440099276" y1="17.000000003998139" x2="21.974731440330288" y2="22.000000003772584" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.974731440099276,22.000000003885361H4.974731440099276c-1.104569499659192,0-2-.895430500338989-2-2V6.000000003885361c0-1.104569499661011.895430500340808-2,2-2h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.974731440099276,4.000000003885361h2c1.104569499670106,0,2,.895430500338989,2,2v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6.974731440099276" y="2.000000003885361" width="10" height="4" rx="1.118033988748721" ry="1.118033988748721" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.984731440099495" y1="10.000000003885361" x2="6.974731440099276" y2="10.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.984731440099495" y1="14.000000003888999" x2="6.974731440099276" y2="14.000000003888999" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731440099276" y1="10.000000003885361" x2="16.974731440099276" y2="10.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731440099276" y1="14.000000003888999" x2="13.974731440099276" y2="14.000000003888999" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.984731440099495" y1="18.000000003888999" x2="6.974731440099276" y2="18.000000003888999" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731440099276" y1="18.000000003888999" x2="11.974731440099276" y2="18.000000003888999" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ClipboardShortlistX.displayName = 'ClipboardShortlistX';

export default ClipboardShortlistX;
export { ClipboardShortlistX };
