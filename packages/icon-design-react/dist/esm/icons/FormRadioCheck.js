import { createElement, forwardRef } from 'react';

const FormRadioCheck = forwardRef(function FormRadioCheck(
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
    createElement('line', {"x1":"18.00000000376167","y1":"11.999999998985004","x2":"22.00000000376167","y2":"11.999999998985004","key":"0"}),
    createElement('circle', {"cx":"8.00000000376167","cy":"11.999999998985004","r":"6","key":"1"}),
    createElement('polyline', {"points":"6.00000000376167 11.999999998985004 7.50000000376167 13.499999998985004 10.00000000376167 10.999999998985004","key":"2"})
  );
});

FormRadioCheck.displayName = 'FormRadioCheck';

export default FormRadioCheck;
export { FormRadioCheck };
