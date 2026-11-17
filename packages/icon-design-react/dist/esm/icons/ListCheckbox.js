import { createElement, forwardRef } from 'react';

const ListCheckbox = forwardRef(function ListCheckbox(
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
    createElement('line', {"x1":"9.974731449547107","y1":"4.000000000570253","x2":"21.974731449547107","y2":"4.000000000570253","key":"0"}),
    createElement('line', {"x1":"9.974731449547107","y1":"12.000000000571163","x2":"21.974731449547107","y2":"12.000000000571163","key":"1"}),
    createElement('line', {"x1":"9.974731449547107","y1":"20.000000000571163","x2":"21.974731449547107","y2":"20.000000000571163","key":"2"}),
    createElement('rect', {"x":"1.974731449459796","y":"2.000000000661203","width":"4.000000000087311","height":"3.999999999909051","key":"3"}),
    createElement('rect', {"x":"1.974731449459796","y":"10.000000000571163","width":"4.000000000087311","height":"3.999999999909051","key":"4"}),
    createElement('rect', {"x":"1.974731449459796","y":"18.000000000571163","width":"4.000000000087311","height":"3.999999999909051","key":"5"})
  );
});

ListCheckbox.displayName = 'ListCheckbox';

export default ListCheckbox;
export { ListCheckbox };
