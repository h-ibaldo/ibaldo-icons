import { createElement, forwardRef } from 'react';

const ToolbarNavigationRight = forwardRef(function ToolbarNavigationRight(
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
    createElement('rect', {"x":"1.99999997206578","y":"1.997697219891961","width":"20","height":"19.999864816289119","rx":"1.99999999997226","ry":"1.99999999997226","transform":"translate(23.999999944603495 23.995259255601013) rotate(180)","key":"0"}),
    createElement('line', {"x1":"14.999999971625584","y1":"1.997562036452109","x2":"14.999999972516889","y2":"21.997562036452109","key":"1"}),
    createElement('line', {"x1":"14.999999971845682","y1":"6.997562036452109","x2":"21.999999971845682","y2":"6.997562036135605","key":"2"})
  );
});

ToolbarNavigationRight.displayName = 'ToolbarNavigationRight';

export default ToolbarNavigationRight;
export { ToolbarNavigationRight };
