import { createElement, forwardRef } from 'react';

const Poll1Horizontal = forwardRef(function Poll1Horizontal(
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
    createElement('line', {"x1":"6.000000004160029","y1":"5.999999996371116","x2":"14.000000004160029","y2":"5.999999996371116","key":"0"}),
    createElement('line', {"x1":"6.000000004160029","y1":"13.999999996371116","x2":"9.000000004160029","y2":"13.999999996371116","key":"1"}),
    createElement('line', {"x1":"6.000000004160029","y1":"17.999999996371116","x2":"11.000000004160029","y2":"17.999999996371116","key":"2"}),
    createElement('line', {"x1":"6.000000004160029","y1":"9.999999996371116","x2":"18.000000004160029","y2":"9.999999996371116","key":"3"}),
    createElement('rect', {"x":"2.000000004160029","y":"1.999999996371116","width":"20","height":"20","rx":"2","ry":"2","key":"4"})
  );
});

Poll1Horizontal.displayName = 'Poll1Horizontal';

export default Poll1Horizontal;
export { Poll1Horizontal };
