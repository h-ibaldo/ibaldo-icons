import { createElement, forwardRef } from 'react';

const FormRadiusChecked1 = forwardRef(function FormRadiusChecked1(
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
    createElement('circle', {"cx":"5.999999991070581","cy":"12","r":"4","key":"0"}),
    createElement('line', {"x1":"14","y1":"12","x2":"22","y2":"12","key":"1"}),
    createElement('line', {"x1":"6.009999991070799","y1":"12","x2":"6","y2":"12","key":"2"})
  );
});

FormRadiusChecked1.displayName = 'FormRadiusChecked1';

export default FormRadiusChecked1;
export { FormRadiusChecked1 };
