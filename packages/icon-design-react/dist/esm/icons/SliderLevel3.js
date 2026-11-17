import { createElement, forwardRef } from 'react';

const SliderLevel3 = forwardRef(function SliderLevel3(
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
    createElement('line', {"x1":"21.999999977098923","y1":"11.999996563434252","x2":"13.999999977098923","y2":"11.999996563434252","key":"0"}),
    createElement('line', {"x1":"5.999999977098923","y1":"11.999996563434252","x2":"1.999999977098923","y2":"11.999996563434252","key":"1"}),
    createElement('circle', {"cx":"9.999999977098923","cy":"11.999996563435161","r":"3.999999999999545","key":"2"})
  );
});

SliderLevel3.displayName = 'SliderLevel3';

export default SliderLevel3;
export { SliderLevel3 };
