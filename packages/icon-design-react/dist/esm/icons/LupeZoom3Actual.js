import { createElement, forwardRef } from 'react';

const LupeZoom3Actual = forwardRef(function LupeZoom3Actual(
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
    createElement('circle', {"cx":"8.999999981002475","cy":"8.997562035418014","r":"7.000000000000001","key":"0"}),
    createElement('line', {"x1":"21.999999981002475","y1":"21.997562035418014","x2":"13.999999981002475","y2":"13.997562035418014","key":"1"}),
    createElement('line', {"x1":"5.999999980991561","y1":"6.997562035418014","x2":"5.999999980991561","y2":"10.997562035418014","key":"2"}),
    createElement('line', {"x1":"11.999999980991561","y1":"6.997562035418014","x2":"11.999999980991561","y2":"10.997562035418014","key":"3"}),
    createElement('line', {"x1":"8.999999980991561","y1":"7.007562035418232","x2":"8.999999980991561","y2":"6.997562035418014","key":"4"}),
    createElement('line', {"x1":"8.999999980991561","y1":"11.007562035418232","x2":"8.999999980991561","y2":"10.997562035418014","key":"5"})
  );
});

LupeZoom3Actual.displayName = 'LupeZoom3Actual';

export default LupeZoom3Actual;
export { LupeZoom3Actual };
