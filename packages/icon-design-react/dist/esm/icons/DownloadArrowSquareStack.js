import { createElement, forwardRef } from 'react';

const DownloadArrowSquareStack = forwardRef(function DownloadArrowSquareStack(
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
    createElement('rect', {"x":"1.974731450026411","y":"7.000000000459295","width":"14","height":"15","rx":"3","ry":"3","key":"0"}),
    createElement('path', {"d":"M7.974731450026411,7.000000000459295v-1.999999999997272c0-1.656854249496064,1.343145750505755-3,3-3h8c1.656854249493335,0,3,1.343145750503936,3,3v9c0,1.656854249490607-1.343145750510303,3-3,3l-3-.000000000002728","key":"1"}),
    createElement('polyline', {"points":"11.974731450026411 15.000000000462023 8.974731449353385 18.000000000462023 5.974731450026411 15.000000000462023","key":"2"}),
    createElement('line', {"x1":"8.974731451103253","y1":"11.000000000462023","x2":"8.974731449353385","y2":"18.000000000462023","key":"3"})
  );
});

DownloadArrowSquareStack.displayName = 'DownloadArrowSquareStack';

export default DownloadArrowSquareStack;
export { DownloadArrowSquareStack };
