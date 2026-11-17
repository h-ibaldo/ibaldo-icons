import { createElement, forwardRef } from 'react';

const FormCheckboxUnchecked1 = forwardRef(function FormCheckboxUnchecked1(
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
    createElement('line', {"x1":"13.050537107350465","y1":"11.998779300185561","x2":"22.050537107350465","y2":"11.998779300185561","key":"0"}),
    createElement('rect', {"x":"2.050537107350465","y":"7.998779300185561","width":"8","height":"8","rx":"1","ry":"1","key":"1"})
  );
});

FormCheckboxUnchecked1.displayName = 'FormCheckboxUnchecked1';

export default FormCheckboxUnchecked1;
export { FormCheckboxUnchecked1 };
