import { createElement, forwardRef } from 'react';

const ProgressBarDottedSharp = forwardRef(function ProgressBarDottedSharp(
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
    createElement('line', {"x1":"2.984731449512765","y1":"11.000000000480213","x2":"2.974731449512547","y2":"11.000000000480213","key":"0"}),
    createElement('line', {"x1":"5.984731449512765","y1":"11.000000000480213","x2":"5.974731449512547","y2":"11.000000000480213","key":"1"}),
    createElement('line', {"x1":"8.984731449512765","y1":"11.000000000480213","x2":"8.974731449512547","y2":"11.000000000480213","key":"2"}),
    createElement('line', {"x1":"11.984731449512765","y1":"11.000000000480213","x2":"11.974731449512547","y2":"11.000000000480213","key":"3"}),
    createElement('line', {"x1":"13.974731449501633","y1":"15.000000000480213","x2":"13.974731449501633","y2":"9.000000000480213","key":"4"}),
    createElement('line', {"x1":"4.984731449512765","y1":"13.000000000480213","x2":"4.974731449512547","y2":"13.000000000480213","key":"5"}),
    createElement('line', {"x1":"7.984731449512765","y1":"13.000000000480213","x2":"7.974731449512547","y2":"13.000000000480213","key":"6"}),
    createElement('line', {"x1":"10.984731449512765","y1":"13.000000000480213","x2":"10.974731449512547","y2":"13.000000000480213","key":"7"}),
    createElement('rect', {"x":"1.974731449501633","y":"8.999999993041456","width":"20","height":"6.000000014876605","key":"8"})
  );
});

ProgressBarDottedSharp.displayName = 'ProgressBarDottedSharp';

export default ProgressBarDottedSharp;
export { ProgressBarDottedSharp };
