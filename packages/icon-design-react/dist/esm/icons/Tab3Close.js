import { createElement, forwardRef } from 'react';

const Tab3Close = forwardRef(function Tab3Close(
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
    createElement('polyline', {"points":"13.050537104490104 21.997565477288845 2.050537104500108 21.997565477288845 2.050537104500108 1.997565477288845 10.050537104500108 1.997565477288845 13.050537104500108 5.997565477288845 22.050537104500108 5.997565477288845 22.050537104500108 12.997565477288845","key":"0"}),
    createElement('polyline', {"points":"15.050537104500108 1.997565477288845 22.050537104500108 1.997565477288845 22.050537104500108 5.997565477288845","key":"1"}),
    createElement('line', {"x1":"17.050537104500108","y1":"16.997565477288845","x2":"22.050537104500108","y2":"21.997565477288845","key":"2"}),
    createElement('line', {"x1":"22.050537104500108","y1":"16.997565477288845","x2":"17.050537104500108","y2":"21.997565477288845","key":"3"})
  );
});

Tab3Close.displayName = 'Tab3Close';

export default Tab3Close;
export { Tab3Close };
