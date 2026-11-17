import { createElement, forwardRef } from 'react';

const WindowStackArrowUpRight = forwardRef(function WindowStackArrowUpRight(
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
    createElement('path', {"d":"M5.999999993642632,12.998779299956368V4.921997073393868c0-1.656854249493335,1.343145750519398-3,3-3h10c1.656854249500611,0,3,1.343145750506665,3,3v10c0,1.656854249489697-1.343145750499389,3-3,3h-8","key":"0"}),
    createElement('polyline', {"points":"10.999999993642632 8.998779299956368 14.999999993642632 8.998779299956368 14.999999993642632 12.998779299956368","key":"1"}),
    createElement('line', {"x1":"6.999999993642632","y1":"16.998779299956368","x2":"14.999999993642632","y2":"8.998779299956368","key":"2"}),
    createElement('path', {"d":"M5.999999993642632,4.998779299956368h-1c-1.656854249489697,0-3,1.343145750506665-3,3v11c0,1.656854249493335,1.343145750510303,3,3,3h12c1.656854249500611,0,3-1.343145750506665,3-3v-1","key":"3"})
  );
});

WindowStackArrowUpRight.displayName = 'WindowStackArrowUpRight';

export default WindowStackArrowUpRight;
export { WindowStackArrowUpRight };
