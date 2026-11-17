import { createElement, forwardRef } from 'react';

const ToolbarNavigationPane2 = forwardRef(function ToolbarNavigationPane2(
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
    createElement('rect', {"x":"2.050537039341634","y":"2.99756204273308","width":"20","height":"18.000000000400178","rx":"1.999999999994095","ry":"1.999999999994095","transform":"translate(24.101074078167692 23.995124086384191) rotate(-180)","key":"0"}),
    createElement('polyline', {"points":"9.050537043445729 14.997562036226554 6.050537043445729 11.997562036226554 9.050537043445729 8.997562036226554","key":"1"}),
    createElement('polyline', {"points":"15.050537043445729 14.997562036226554 18.050537043445729 11.997562036157433 15.050537043445729 8.997562036226554","key":"2"})
  );
});

ToolbarNavigationPane2.displayName = 'ToolbarNavigationPane2';

export default ToolbarNavigationPane2;
export { ToolbarNavigationPane2 };
