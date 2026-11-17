import { forwardRef } from 'react';

const ImagePhoto2 = forwardRef(({
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
    <rect x="1.999999993990059" y="3.998779299956368" width="20" height="16" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.999999994539394,15.998779299923626l4.290979281169712-3.370538309362018c1.019635543500044-.800917561184178,2.438422182010981-.856157809855176,3.517243840909941-.136943370587687l4.191776877371012,2.794517918249767" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="8.000000020228981" y="7.998779301392336" width="1.999999947522156" height="1.999999997131702" rx=".999998976651711" ry=".999998976651711" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.803466791419851,15.367675784298626l-1.107972138199329-.822777620433044c-1.016974122650936-.755202698543144-2.398699198951363-.79026749725017-3.452669981579675-.087620308829173l-4.242824677101453,2.828549784730967" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ImagePhoto2.displayName = 'ImagePhoto2';

export default ImagePhoto2;
export { ImagePhoto2 };
