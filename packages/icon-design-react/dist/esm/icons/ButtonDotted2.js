import { createElement, forwardRef } from 'react';

const ButtonDotted2 = forwardRef(function ButtonDotted2(
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
    createElement('rect', {"x":"1.999999990799552","y":"7.000000000448381","width":"20","height":"10","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"7.999999990799552","y1":"12.010000000450418","x2":"7.999999990799552","y2":"12.0000000004502","key":"1"}),
    createElement('line', {"x1":"11.999999990799552","y1":"12.010000000450418","x2":"11.999999990799552","y2":"12.0000000004502","key":"2"}),
    createElement('line', {"x1":"15.999999990799552","y1":"12.010000000450418","x2":"15.999999990799552","y2":"12.0000000004502","key":"3"})
  );
});

ButtonDotted2.displayName = 'ButtonDotted2';

export default ButtonDotted2;
export { ButtonDotted2 };
