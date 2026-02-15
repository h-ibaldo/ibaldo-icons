import { forwardRef } from 'react';

const ToolbarShowBottomPannel = forwardRef(({
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
    <rect x="2.050537047695798" y="1.997697219531346" width="20" height="19.999864816291392" rx="2.00000000000091" ry="2.00000000000091" transform="translate(24.101074094785993 23.99525925596236) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.050537043445729 21.997562020008445 6.050537043445729 16.997562020008445 18.050537043445729 16.997562020008445 18.050537043445729 21.997562020008445" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ToolbarShowBottomPannel.displayName = 'ToolbarShowBottomPannel';

export default ToolbarShowBottomPannel;
export { ToolbarShowBottomPannel };
