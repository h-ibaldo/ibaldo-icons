import { createElement, forwardRef } from 'react';

const ChecklistSquareFilledAll = forwardRef(function ChecklistSquareFilledAll(
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
    createElement('line', {"x1":"11.000000000224645","y1":"4.032754075946286","x2":"22.000000000224645","y2":"4.032754075946286","key":"0"}),
    createElement('line', {"x1":"11.000000000224645","y1":"12.032754075946286","x2":"22.000000000224645","y2":"12.032754075946286","key":"1"}),
    createElement('line', {"x1":"11.000000000224645","y1":"20.032754075946286","x2":"22.000000000224645","y2":"20.032754075946286","key":"2"}),
    createElement('rect', {"x":"2.000000000224645","y":"10.032754075946286","width":"4","height":"4","key":"3"}),
    createElement('rect', {"x":"2.000000000224645","y":"2.032754075946286","width":"4","height":"4","key":"4"}),
    createElement('rect', {"x":"2.000000000224645","y":"18.032754075946286","width":"4","height":"4","key":"5"}),
    createElement('line', {"x1":"3.000000000224645","y1":"3.032754075946286","x2":"5.000000000224645","y2":"5.032754075946286","key":"6"}),
    createElement('line', {"x1":"3.000000000172804","y1":"5.032754075895355","x2":"5.000000000276486","y2":"3.032754075997218","key":"7"}),
    createElement('line', {"x1":"3.000000000224645","y1":"11.032754075946286","x2":"5.000000000224645","y2":"13.032754075946286","key":"8"}),
    createElement('line', {"x1":"3.000000000172804","y1":"13.032754075895355","x2":"5.000000000276486","y2":"11.032754075997218","key":"9"}),
    createElement('line', {"x1":"3.000000000224645","y1":"19.032754075946286","x2":"5.000000000224645","y2":"21.032754075946286","key":"10"}),
    createElement('line', {"x1":"3.000000000172804","y1":"21.032754075895355","x2":"5.000000000276486","y2":"19.032754075997218","key":"11"})
  );
});

ChecklistSquareFilledAll.displayName = 'ChecklistSquareFilledAll';

export default ChecklistSquareFilledAll;
export { ChecklistSquareFilledAll };
