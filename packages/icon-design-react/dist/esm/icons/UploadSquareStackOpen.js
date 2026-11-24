import { createElement, forwardRef } from 'react';

const UploadSquareStackOpen = forwardRef(function UploadSquareStackOpen(
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
    createElement('path', {"d":"M12.974731450030049,20.000000000462933c1.656854249491516,0,3-1.343145750510303,3-3.000000000000909v-7c0-1.656854249496064-1.343145750508484-3-3-3H4.974731450030049c-1.656854249495154,0-3,1.343145750503936-3,3v7c0,1.656854249490607,1.343145750504846,3.000000000000909,3,3.000000000000909","key":"0"}),
    createElement('path', {"d":"M7.974731450030049,7.000000000459295v-1.999999999997272c0-1.656854249496064,1.343145750504846-3,3-3h8c1.656854249491516,0,3,1.343145750503936,3,3v7c0,1.656854249490607-1.343145750510303,3-3,3l-3-.000000000002728","key":"1"}),
    createElement('polyline', {"points":"11.974731450030049 15.000000000462023 8.974731449357023 12.000000000462023 5.974731450030049 15.000000000462023","key":"2"}),
    createElement('line', {"x1":"8.974731451105981","y1":"22.000000000462933","x2":"8.974731449357023","y2":"12.000000000462023","key":"3"})
  );
});

UploadSquareStackOpen.displayName = 'UploadSquareStackOpen';

export default UploadSquareStackOpen;
export { UploadSquareStackOpen };
