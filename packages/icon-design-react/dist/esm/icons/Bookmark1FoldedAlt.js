import { forwardRef } from 'react';

const Bookmark1FoldedAlt = forwardRef(({
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
    <path d="M5.000000026699126,1.999999999998181h13c2.209138999320203,0,4,1.790861000679797,4,4v11l-7-4-7,4V4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.000000026699126,4.999999999998181c0-1.656854249400567,1.343145750601252-3,3-3,1.656854249400567,0,3,1.343145750599433,3,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.000000026699126 4.999999999998181 2.000000026699126 21.999999999998181 16.000000026699126 21.999999999998181 16.000000026699126 13.571411132808862" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bookmark1FoldedAlt.displayName = 'Bookmark1FoldedAlt';

export default Bookmark1FoldedAlt;
export { Bookmark1FoldedAlt };
