import { createElement, forwardRef } from 'react';

const FormRadiusUnchecked1 = forwardRef(function FormRadiusUnchecked1(
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
    createElement('circle', {"cx":"5.999999991062396","cy":"12","r":"4","key":"0"}),
    createElement('line', {"x1":"14","y1":"12","x2":"22","y2":"12","key":"1"})
  );
});

FormRadiusUnchecked1.displayName = 'FormRadiusUnchecked1';

export default FormRadiusUnchecked1;
export { FormRadiusUnchecked1 };
