import { createElement, forwardRef } from 'react';

const Information1 = forwardRef(function Information1(
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
    createElement('polyline', {"points":"8.025268553439673 10.99999656424734 12.025268553439673 10.99999656424734 12.025268553439673 20.999996564243702","key":"0"}),
    createElement('line', {"x1":"8.025268553439673","y1":"20.999996564243702","x2":"16.025268553439673","y2":"20.999996564243702","key":"1"}),
    createElement('circle', {"cx":"12.025268553439673","cy":"4.99999656424734","r":"2","key":"2"})
  );
});

Information1.displayName = 'Information1';

export default Information1;
export { Information1 };
