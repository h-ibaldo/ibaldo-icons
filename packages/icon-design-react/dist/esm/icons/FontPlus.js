import { createElement, forwardRef } from 'react';

const FontPlus = forwardRef(function FontPlus(
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
    createElement('circle', {"cx":"16.999999980991561","cy":"16.997562035418014","r":"5","key":"0"}),
    createElement('line', {"x1":"14.999999980991561","y1":"16.997562035418014","x2":"18.999999980991561","y2":"16.997562035418014","key":"1"}),
    createElement('line', {"x1":"16.999999980991561","y1":"14.997562035418014","x2":"16.999999980991561","y2":"18.997562035418014","key":"2"}),
    createElement('line', {"x1":"3.999999980991561","y1":"16.997562035418014","x2":"8.999999980991561","y2":"16.997562035418014","key":"3"}),
    createElement('polyline', {"points":"13.368408184122018 9.997562035418014 9.999999980991561 1.997562035418014 1.999999980991561 20.997562035418014","key":"4"})
  );
});

FontPlus.displayName = 'FontPlus';

export default FontPlus;
export { FontPlus };
