import { createElement, forwardRef } from 'react';

const LoadingBar1 = forwardRef(function LoadingBar1(
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

LoadingBar1.displayName = 'LoadingBar1';

export default LoadingBar1;
export { LoadingBar1 };
