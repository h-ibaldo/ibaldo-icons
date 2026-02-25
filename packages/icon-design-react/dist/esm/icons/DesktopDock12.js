import { forwardRef } from 'react';

const DesktopDock12 = forwardRef(({
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
    <rect x="2.05053704756574" y="3.99756205113863" width="20" height="16" rx="1.99999999997484" ry="1.99999999997484" transform="translate(24.101074094525881 23.995124102885534) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.050537043305667 19.997562035327974 6.050537043305667 14.997562035327974 18.050537043305667 14.997562035327974 18.050537043305667 19.997562035327974" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.050537043305667" y1="14.997562035327974" x2="10.050537043305667" y2="19.997562035327974" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.050537043305667" y1="14.997562035327974" x2="14.050537043305667" y2="19.997562035327974" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DesktopDock12.displayName = 'DesktopDock12';

export default DesktopDock12;
export { DesktopDock12 };
