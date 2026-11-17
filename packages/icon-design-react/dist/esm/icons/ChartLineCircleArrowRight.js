import { createElement, forwardRef } from 'react';

const ChartLineCircleArrowRight = forwardRef(function ChartLineCircleArrowRight(
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
    createElement('polyline', {"points":"6 18 8 20 6 22","key":"0"}),
    createElement('line', {"x1":"2","y1":"20","x2":"8","y2":"20","key":"1"}),
    createElement('path', {"d":"M12,22c5.522827148430224,0,10-4.4771728515625,10-10,0-5.52294921875-4.477172851569776-10-10-10C6.477172851549767,2,2,6.47705078125,2,12c0,1.04541015625.161682128909888,2.052734375.459228515619543,3","key":"2"}),
    createElement('polyline', {"points":"7 14 10 10 14 13 17 9","key":"3"})
  );
});

ChartLineCircleArrowRight.displayName = 'ChartLineCircleArrowRight';

export default ChartLineCircleArrowRight;
export { ChartLineCircleArrowRight };
