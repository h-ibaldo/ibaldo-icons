import { createElement, forwardRef } from 'react';

const UploadSquaresStack4 = forwardRef(function UploadSquaresStack4(
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
    createElement('path', {"d":"M14.974731450030959,19.000000000462023c1.656854249492426,0,3-1.343145750509393,3-3v-7c0-1.656854249496064-1.343145750507574-3-3-3H4.974731450030959c-1.656854249494245,0-3,1.343145750503936-3,3v7c0,1.656854249490607,1.343145750505755,3,3,3","key":"0"}),
    createElement('path', {"d":"M5.974731450030959,6.000000000462023v-1c0-1.656854249496064,1.343145750505755-3,3-3h10c1.656854249492426,0,3,1.343145750503936,3,3v7c0,1.656854249490607-1.343145750511212,3-3,3l-1-.000000000002728","key":"1"}),
    createElement('polyline', {"points":"12.974731450030959 14.000000000462023 9.974731449356113 11.000000000462023 6.974731450030959 14.000000000462023","key":"2"}),
    createElement('line', {"x1":"9.974731451106891","y1":"22.000000000462933","x2":"9.974731449356113","y2":"11.000000000462023","key":"3"})
  );
});

UploadSquaresStack4.displayName = 'UploadSquaresStack4';

export default UploadSquaresStack4;
export { UploadSquaresStack4 };
