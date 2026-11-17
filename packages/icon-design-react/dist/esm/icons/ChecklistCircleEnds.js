import { createElement, forwardRef } from 'react';

const ChecklistCircleEnds = forwardRef(function ChecklistCircleEnds(
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
    createElement('circle', {"cx":"3.949462885138928","cy":"12.000000000480213","r":"2","key":"0"}),
    createElement('line', {"x1":"10.949462885138928","y1":"4.000000000480213","x2":"21.949462885138928","y2":"4.000000000480213","key":"1"}),
    createElement('line', {"x1":"10.949462885138928","y1":"12.000000000480213","x2":"21.949462885138928","y2":"12.000000000480213","key":"2"}),
    createElement('line', {"x1":"10.949462885138928","y1":"20.000000000480213","x2":"21.949462885138928","y2":"20.000000000480213","key":"3"}),
    createElement('polyline', {"points":"1.949462885138928 20.000000000480213 3.949462885138928 22.000000000480213 6.949462885138928 18.000000000480213","key":"4"}),
    createElement('polyline', {"points":"1.949462885138928 4.000000000480213 3.949462885138928 6.000000000480213 6.949462885138928 2.000000000480213","key":"5"})
  );
});

ChecklistCircleEnds.displayName = 'ChecklistCircleEnds';

export default ChecklistCircleEnds;
export { ChecklistCircleEnds };
