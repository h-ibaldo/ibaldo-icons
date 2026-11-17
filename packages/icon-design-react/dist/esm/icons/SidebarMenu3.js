import { createElement, forwardRef } from 'react';

const SidebarMenu3 = forwardRef(function SidebarMenu3(
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
    createElement('rect', {"x":"2.000000004900357","y":"1.999999995256076","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"2.000000004900357","y1":"5.999999995256076","x2":"22.000000004900357","y2":"5.999999995256076","key":"1"}),
    createElement('line', {"x1":"9.000000004900357","y1":"9.999999995256076","x2":"11.000000004900357","y2":"9.999999995256076","key":"2"}),
    createElement('line', {"x1":"9.000000004900357","y1":"13.999999995256076","x2":"11.000000004900357","y2":"13.999999995256076","key":"3"}),
    createElement('line', {"x1":"9.000000004900357","y1":"17.999999995256076","x2":"11.000000004900357","y2":"17.999999995256076","key":"4"}),
    createElement('line', {"x1":"6.010000004900576","y1":"9.999999995256076","x2":"6.000000004900357","y2":"9.999999995256076","key":"5"}),
    createElement('line', {"x1":"6.010000004900576","y1":"13.999999995256076","x2":"6.000000004900357","y2":"13.999999995256076","key":"6"}),
    createElement('line', {"x1":"6.010000004900576","y1":"17.999999995256076","x2":"6.000000004900357","y2":"17.999999995256076","key":"7"})
  );
});

SidebarMenu3.displayName = 'SidebarMenu3';

export default SidebarMenu3;
export { SidebarMenu3 };
