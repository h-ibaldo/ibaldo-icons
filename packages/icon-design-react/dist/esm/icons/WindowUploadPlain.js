import { createElement, forwardRef } from 'react';

const WindowUploadPlain = forwardRef(function WindowUploadPlain(
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
    createElement('path', {"d":"M5.999999993642632,21.998779299956368h-1c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750510303,3-3,3h-1","key":"0"}),
    createElement('line', {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368","key":"1"}),
    createElement('polyline', {"points":"8.999999993642632 15.998779299956368 11.999999993642632 12.998779299956368 14.999999993642632 15.998779299956368","key":"2"}),
    createElement('line', {"x1":"11.999999993642632","y1":"12.998779299956368","x2":"11.999999993642632","y2":"21.998779299956368","key":"3"})
  );
});

WindowUploadPlain.displayName = 'WindowUploadPlain';

export default WindowUploadPlain;
export { WindowUploadPlain };
