import { createElement, forwardRef } from 'react';

const Scanner5 = forwardRef(function Scanner5(
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
    createElement('path', {"d":"M1.999999981189831,12.999996564258254h20v6c0,1.655745073481999-1.344254926518001,3-3,3H4.999999981189831c-1.655745073482,0-3-1.344254926518001-3-3v-6h0Z","key":"0"}),
    createElement('line', {"x1":"4.999999981189831","y1":"1.999996564258254","x2":"21.999999981189831","y2":"12.999996564258254","key":"1"}),
    createElement('line', {"x1":"5.999999981189831","y1":"16.999996564258254","x2":"6.999999981189831","y2":"16.999996564258254","key":"2"})
  );
});

Scanner5.displayName = 'Scanner5';

export default Scanner5;
export { Scanner5 };
