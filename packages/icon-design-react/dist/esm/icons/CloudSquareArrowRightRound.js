import { createElement, forwardRef } from 'react';

const CloudSquareArrowRightRound = forwardRef(function CloudSquareArrowRightRound(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M2,8.999999973497324v8.000000000271029c0,2.761423749159803,2.238576250840197,5,5,5h10c2.761423749150708,0,5-2.238576250840197,5-5V6.999999973768354c0-2.761423749148889-2.238576250849292-5-5-5h-5","key":"0"}),
    createElement('polyline', {"points":"6 5.999999974039383 8 3.999999974039383 6 1.999999974039383","key":"1"}),
    createElement('line', {"x1":"2","y1":"3.999999974039383","x2":"8","y2":"3.999999974039383","key":"2"}),
    createElement('path', {"d":"M15.5,10.999999973497324h-.5c0-1.656860351558862-1.343139648439319-3-3-3s-3,1.343139648441138-3,3h-.5c-1.380737304689319,0-2.5,1.119262695301586-2.5,2.5,0,1.380737304691138,1.119262695310681,2.5,2.5,2.5h7c1.380737304689319,0,2.5-1.119262695308862,2.5-2.5,0-1.380737304698414-1.119262695310681-2.5-2.5-2.5Z","key":"3"})
  );
});

CloudSquareArrowRightRound.displayName = 'CloudSquareArrowRightRound';

export default CloudSquareArrowRightRound;
export { CloudSquareArrowRightRound };
