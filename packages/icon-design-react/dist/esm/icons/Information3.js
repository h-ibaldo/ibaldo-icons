import { createElement, forwardRef } from 'react';

const Information3 = forwardRef(function Information3(
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
    createElement('polyline', {"points":"7.025268553439673 10.99999656424734 10.025268553439673 10.99999656424734 10.025268553439673 21.999996564243702","key":"0"}),
    createElement('polyline', {"points":"10.025268553439673 10.99999656424734 14.025268553439673 10.99999656424734 14.025268553439673 21.999996564243702","key":"1"}),
    createElement('line', {"x1":"7.025268553439673","y1":"21.999996564243702","x2":"17.025268553439673","y2":"21.999996564243702","key":"2"}),
    createElement('circle', {"cx":"12.025268553439673","cy":"4.99999656424734","r":"3","key":"3"})
  );
});

Information3.displayName = 'Information3';

export default Information3;
export { Information3 };
