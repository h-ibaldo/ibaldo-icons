import { createElement, forwardRef } from 'react';

const DiagramUnit = forwardRef(function DiagramUnit(
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
    createElement('rect', {"x":"1.949462885142566","y":"15.000000000480213","width":"7","height":"7","key":"0"}),
    createElement('rect', {"x":"14.949462885142566","y":"15.000000000480213","width":"7","height":"7","key":"1"}),
    createElement('rect', {"x":"1.949462885142566","y":"2.000000000480213","width":"7","height":"7","key":"2"}),
    createElement('rect', {"x":"14.949462885142566","y":"2.000000000480213","width":"7","height":"7","key":"3"}),
    createElement('line', {"x1":"1.949462885142566","y1":"17.000000000480213","x2":"6.949462885142566","y2":"22.000000000480213","key":"4"}),
    createElement('line', {"x1":"3.949462885142566","y1":"15.000000000480213","x2":"8.949462885142566","y2":"20.000000000480213","key":"5"}),
    createElement('line', {"x1":"8.949462885142566","y1":"5.500000000480213","x2":"14.949462885142566","y2":"5.500000000480213","key":"6"}),
    createElement('line', {"x1":"8.949462885142566","y1":"18.500000000480213","x2":"14.949462885142566","y2":"18.500000000480213","key":"7"}),
    createElement('line', {"x1":"18.449462885142566","y1":"9.000000000480213","x2":"18.449462885142566","y2":"15.000000000480213","key":"8"}),
    createElement('line', {"x1":"5.449462885142566","y1":"9.000000000480213","x2":"5.449462885142566","y2":"15.000000000480213","key":"9"})
  );
});

DiagramUnit.displayName = 'DiagramUnit';

export default DiagramUnit;
export { DiagramUnit };
