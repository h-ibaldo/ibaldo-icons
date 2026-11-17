import { createElement, forwardRef } from 'react';

const SidebarMenu1 = forwardRef(function SidebarMenu1(
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
    createElement('rect', {"x":"2.000000004900357","y":"1.999999995256076","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"2.000000004900357","y1":"7.999999995256076","x2":"22.000000004900357","y2":"7.999999995256076","key":"1"}),
    createElement('line', {"x1":"5.010000004900576","y1":"4.999999995256076","x2":"5.000000004900357","y2":"4.999999995256076","key":"2"}),
    createElement('line', {"x1":"8.010000004900576","y1":"4.999999995256076","x2":"8.000000004900357","y2":"4.999999995256076","key":"3"}),
    createElement('line', {"x1":"11.010000004900576","y1":"4.999999995256076","x2":"11.000000004900357","y2":"4.999999995256076","key":"4"}),
    createElement('line', {"x1":"6.000000004900357","y1":"11.999999995256076","x2":"9.000000004900357","y2":"11.999999995256076","key":"5"}),
    createElement('line', {"x1":"6.000000004900357","y1":"14.999999995256076","x2":"9.000000004900357","y2":"14.999999995256076","key":"6"}),
    createElement('line', {"x1":"6.000000004900357","y1":"17.999999995256076","x2":"9.000000004900357","y2":"17.999999995256076","key":"7"})
  );
});

SidebarMenu1.displayName = 'SidebarMenu1';

export default SidebarMenu1;
export { SidebarMenu1 };
