import { forwardRef } from 'react';

const ToolbarPreviewEye32 = forwardRef(({
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
    <rect x="1.999999975221726" y="2.999996561106855" width="20" height="18.000135182977829" rx="1.999999999975317" ry="1.999999999975317" transform="translate(23.999999950865007 24.000128304769987) rotate(180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.999999972062142,9.999996564601133c-1.104569499599165,0-2,.895430500400835-2,2s.895430500400835,2,2,2c1.104569499600984,0,2-.895430500400835,2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.999999972062142,6.999996564601133c-3.53173828125,0-6.57977294921875,2.03924560546875-8.05340576171875,5,1.4736328125,2.96075439453125,4.52166748046875,5,8.05340576171875,5s6.579772949220569-2.03924560546875,8.053405761720569-5c-1.4736328125-2.96075439453125-4.521667480470569-5-8.053405761720569-5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ToolbarPreviewEye32.displayName = 'ToolbarPreviewEye32';

export default ToolbarPreviewEye32;
export { ToolbarPreviewEye32 };
