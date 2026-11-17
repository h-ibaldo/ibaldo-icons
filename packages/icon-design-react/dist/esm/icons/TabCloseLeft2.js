import { createElement, forwardRef } from 'react';

const TabCloseLeft2 = forwardRef(function TabCloseLeft2(
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
    createElement('polyline', {"points":"13.149805218625261 21.997565477288845 2.050537104505565 21.997565477288845 2.050537104505565 1.997565477288845 11.050537104505565 1.997565477288845 11.050537104505565 5.997565477288845 22.050537104505565 5.997565477288845 22.050537104505565 12.997565477288845","key":"0"}),
    createElement('line', {"x1":"22.050537104505565","y1":"1.997565477288845","x2":"15.050537104505565","y2":"1.997565477288845","key":"1"}),
    createElement('line', {"x1":"17.050537104505565","y1":"16.997565477288845","x2":"22.050537104505565","y2":"21.997565477288845","key":"2"}),
    createElement('line', {"x1":"22.050537104505565","y1":"16.997565477288845","x2":"17.050537104505565","y2":"21.997565477288845","key":"3"}),
    createElement('line', {"x1":"14.050537104505565","y1":"13.997565477288845","x2":"7.050537104505565","y2":"13.997565477288845","key":"4"}),
    createElement('polyline', {"points":"10.050537104505565 10.997565477288845 7.050537104505565 13.997565477288845 10.050537104505565 16.997565477288845","key":"5"})
  );
});

TabCloseLeft2.displayName = 'TabCloseLeft2';

export default TabCloseLeft2;
export { TabCloseLeft2 };
