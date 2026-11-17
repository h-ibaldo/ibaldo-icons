import { forwardRef } from 'react';

const HideSidepanelLeft = forwardRef(({
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
    <line x1="7.050537043445729" y1="6.997562036495765" x2="5.05035230073554" y2="6.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.050537043416625" y1="9.997562036495765" x2="5.050352300706436" y2="9.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.050537043385702" y1="12.997562036495765" x2="5.050352300676423" y2="12.997562036226554" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.050502320485975" y="2.997627984182145" width="20" height="17.999993765781255" rx="1.999999999999994" ry="1.999999999999994" transform="translate(24.101004640366348 23.995249734753816) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.050502320846135" y1="2.997627983978418" x2="10.050502320125815" y2="20.997621749763312" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.050537047975013" y1="11.997562037482567" x2="14.050537047975013" y2="11.997562037212447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.050537048116894 8.997562037347052 14.050537047975013 11.997562037212447 17.050537047845864 14.997562037347052" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

HideSidepanelLeft.displayName = 'HideSidepanelLeft';

export default HideSidepanelLeft;
export { HideSidepanelLeft };
