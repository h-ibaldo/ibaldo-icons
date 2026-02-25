import { forwardRef } from 'react';

const PageViewGroupItems12 = forwardRef(({
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
    <path d="M11.999999994000973,18.998779299956368h-3c-1.104569499661011,0-2-.895430500338989-2-2v-8c0-1.104569499661011.895430500338989-2,2-2h8c1.104569499668287,0,2,.895430500338989,2,2v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <line x1="18.999999994000973" y1="15.998779299956368" x2="18.999999994000973" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999994000973" y1="18.998779299865419" x2="15.999999994000973" y2="18.99877930004368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M6.999999994000973,13.998779299956368h-3c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h8c1.104569499668287,0,2,.895430500338989,2,2v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PageViewGroupItems12.displayName = 'PageViewGroupItems12';

export default PageViewGroupItems12;
export { PageViewGroupItems12 };
