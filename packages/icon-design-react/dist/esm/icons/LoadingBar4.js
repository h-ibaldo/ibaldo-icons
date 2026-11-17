import { createElement, forwardRef } from 'react';

const LoadingBar4 = forwardRef(function LoadingBar4(
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
    createElement('rect', {"x":"1.974731449501633","y":"8.000000000480213","width":"20","height":"8","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"2.974731449501633","y1":"15.000000000480213","x2":"9.974731449501633","y2":"8.000000000480213","key":"1"}),
    createElement('line', {"x1":"1.974731449501633","y1":"12.000000000480213","x2":"5.974731449501633","y2":"8.000000000480213","key":"2"}),
    createElement('line', {"x1":"5.974731449501633","y1":"16.000000000480213","x2":"13.974731449501633","y2":"8.000000000480213","key":"3"}),
    createElement('line', {"x1":"9.974731449501633","y1":"16.000000000480213","x2":"13.974731449501633","y2":"12.000000000480213","key":"4"}),
    createElement('line', {"x1":"13.974731449501633","y1":"8.000000000480213","x2":"13.974731449501633","y2":"16.000000000480213","key":"5"})
  );
});

LoadingBar4.displayName = 'LoadingBar4';

export default LoadingBar4;
export { LoadingBar4 };
