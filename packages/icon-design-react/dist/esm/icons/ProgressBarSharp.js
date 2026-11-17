import { createElement, forwardRef } from 'react';

const ProgressBarSharp = forwardRef(function ProgressBarSharp(
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
    createElement('rect', {"x":"1.974731449503452","y":"8.000000000480213","width":"20","height":"8","key":"0"}),
    createElement('rect', {"x":"4.974731449503452","y":"11.000000000480213","width":"8","height":"2","key":"1"})
  );
});

ProgressBarSharp.displayName = 'ProgressBarSharp';

export default ProgressBarSharp;
export { ProgressBarSharp };
