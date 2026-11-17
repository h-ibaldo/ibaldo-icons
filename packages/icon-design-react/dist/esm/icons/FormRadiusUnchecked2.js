import { createElement, forwardRef } from 'react';

const FormRadiusUnchecked2 = forwardRef(function FormRadiusUnchecked2(
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
    createElement('line', {"x1":"18.000000000251021","y1":"11.999999995703547","x2":"22.000000000251021","y2":"11.999999995703547","key":"0"}),
    createElement('circle', {"cx":"8.000000000251021","cy":"11.999999995703547","r":"6","key":"1"})
  );
});

FormRadiusUnchecked2.displayName = 'FormRadiusUnchecked2';

export default FormRadiusUnchecked2;
export { FormRadiusUnchecked2 };
