import { createElement, forwardRef } from 'react';

const TabXStep = forwardRef(function TabXStep(
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
    createElement('polyline', {"points":"13.149805218629808 21.997565477288845 2.050537104500108 21.997565477288845 2.050537104500108 1.997565477288845 11.050537104500108 1.997565477288845 11.050537104500108 5.997565477288845 22.050537104500108 5.997565477288845 22.050537104500108 12.997565477288845","key":"0"}),
    createElement('line', {"x1":"22.050537104500108","y1":"1.997565477288845","x2":"15.050537104500108","y2":"1.997565477288845","key":"1"}),
    createElement('line', {"x1":"17.050537104500108","y1":"16.997565477288845","x2":"22.050537104500108","y2":"21.997565477288845","key":"2"}),
    createElement('line', {"x1":"22.050537104500108","y1":"16.997565477288845","x2":"17.050537104500108","y2":"21.997565477288845","key":"3"})
  );
});

TabXStep.displayName = 'TabXStep';

export default TabXStep;
export { TabXStep };
