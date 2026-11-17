import { createElement, forwardRef } from 'react';

const ApplicationWindow1Music1 = forwardRef(function ApplicationWindow1Music1(
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
    createElement('rect', {"x":"2.000000000184627","y":"2.000000000448381","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"1"}),
    createElement('polyline', {"points":"15.000000000184627 12.500000000448381 12.000000000184627 11.500000000448381 12.000000000184627 17.500000000448381","key":"2"}),
    createElement('ellipse', {"cx":"10.500000000184627","cy":"17.500000000448381","rx":"1.5","ry":"1","key":"3"}),
    createElement('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"5"}),
    createElement('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"6"})
  );
});

ApplicationWindow1Music1.displayName = 'ApplicationWindow1Music1';

export default ApplicationWindow1Music1;
export { ApplicationWindow1Music1 };
