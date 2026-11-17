import { createElement, forwardRef } from 'react';

const FormDropdownSlim = forwardRef(function FormDropdownSlim(
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
    createElement('rect', {"x":"1.974731444090139","y":"8.99999999557258","width":"20","height":"5.999999999996362","rx":"1","ry":"1","key":"0"}),
    createElement('line', {"x1":"15.974731444090139","y1":"8.99999999557258","x2":"15.974731444090139","y2":"14.999999995568942","key":"1"})
  );
});

FormDropdownSlim.displayName = 'FormDropdownSlim';

export default FormDropdownSlim;
export { FormDropdownSlim };
