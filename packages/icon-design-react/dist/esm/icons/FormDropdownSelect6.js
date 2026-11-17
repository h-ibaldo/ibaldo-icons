import { createElement, forwardRef } from 'react';

const FormDropdownSelect6 = forwardRef(function FormDropdownSelect6(
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
    createElement('rect', {"x":"1.974731444101053","y":"2.99999999557258","width":"20","height":"6","rx":".999999999999981","ry":".999999999999981","key":"0"}),
    createElement('line', {"x1":"15.974731444101053","y1":"2.999999995576218","x2":"15.974731444101053","y2":"8.99999999557258","key":"1"}),
    createElement('path', {"d":"M1.974731444101053,8.99999999557258v11c0,.552284749828686.447715250169495,1,1,1h12c.552284749828686,0,1-.447715250171314,1-1v-11","key":"2"}),
    createElement('line', {"x1":"5.974731444101053","y1":"12.99999999557258","x2":"11.974731444101053","y2":"12.99999999557258","key":"3"}),
    createElement('line', {"x1":"5.974731444101053","y1":"16.99999999557258","x2":"11.974731444101053","y2":"16.99999999557258","key":"4"})
  );
});

FormDropdownSelect6.displayName = 'FormDropdownSelect6';

export default FormDropdownSelect6;
export { FormDropdownSelect6 };
