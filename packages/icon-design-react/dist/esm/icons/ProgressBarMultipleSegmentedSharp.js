import { createElement, forwardRef } from 'react';

const ProgressBarMultipleSegmentedSharp = forwardRef(function ProgressBarMultipleSegmentedSharp(
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
    createElement('rect', {"x":"1.949462885140747","y":"2.000000000480213","width":"20","height":"4","key":"0"}),
    createElement('rect', {"x":"1.949462885140747","y":"10.000000000480213","width":"20","height":"4","key":"1"}),
    createElement('rect', {"x":"1.949462885140747","y":"18.000000000480213","width":"20","height":"4","key":"2"}),
    createElement('line', {"x1":"4.949462885142566","y1":"2.000000000480213","x2":"4.949462885142566","y2":"6.000000000480213","key":"3"}),
    createElement('line', {"x1":"7.949462885142566","y1":"2.000000000480213","x2":"7.949462885142566","y2":"6.000000000480213","key":"4"}),
    createElement('line', {"x1":"4.949462885142566","y1":"18.000000000480213","x2":"4.949462885142566","y2":"22.000000000480213","key":"5"}),
    createElement('line', {"x1":"7.949462885142566","y1":"18.000000000480213","x2":"7.949462885142566","y2":"22.000000000480213","key":"6"}),
    createElement('line', {"x1":"10.949462885142566","y1":"18.000000000480213","x2":"10.949462885142566","y2":"22.000000000480213","key":"7"}),
    createElement('line', {"x1":"4.949462885142566","y1":"10.000000000480213","x2":"4.949462885142566","y2":"14.000000000480213","key":"8"}),
    createElement('line', {"x1":"7.949462885142566","y1":"10.000000000480213","x2":"7.949462885142566","y2":"14.000000000480213","key":"9"}),
    createElement('line', {"x1":"10.949462885142566","y1":"10.000000000480213","x2":"10.949462885142566","y2":"14.000000000480213","key":"10"}),
    createElement('line', {"x1":"13.949462885142566","y1":"10.000000000480213","x2":"13.949462885142566","y2":"14.000000000480213","key":"11"})
  );
});

ProgressBarMultipleSegmentedSharp.displayName = 'ProgressBarMultipleSegmentedSharp';

export default ProgressBarMultipleSegmentedSharp;
export { ProgressBarMultipleSegmentedSharp };
