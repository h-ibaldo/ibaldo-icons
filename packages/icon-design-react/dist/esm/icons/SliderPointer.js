import { createElement, forwardRef } from 'react';

const SliderPointer = forwardRef(function SliderPointer(
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
    createElement('polygon', {"points":"11.999999977098923 15.999996563434252 8.999999977098923 18.999996563434252 5.999999977098923 15.999996563434252 5.999999977098923 5.999996563434252 11.999999977098923 5.999996563434252 11.999999977098923 15.999996563434252","key":"0"}),
    createElement('line', {"x1":"21.999999977098923","y1":"11.999996563434252","x2":"11.999999977098923","y2":"11.999996563434252","key":"1"}),
    createElement('line', {"x1":"5.999999977098923","y1":"11.999996563434252","x2":"1.999999977098923","y2":"11.999996563434252","key":"2"})
  );
});

SliderPointer.displayName = 'SliderPointer';

export default SliderPointer;
export { SliderPointer };
