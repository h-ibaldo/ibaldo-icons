import { createElement, forwardRef } from 'react';

const FormRadioCheckSmall = forwardRef(function FormRadioCheckSmall(
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
    createElement('path', {"d":"M12 12C12 14.762 9.762 17 7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7C9.762 7 12 9.238 12 12Z","key":"0"}),
    createElement('path', {"d":"M5.25 12L6.418 13.168L8.75 10.832","key":"1"}),
    createElement('path', {"d":"M16 12L21 12","key":"2"})
  );
});

FormRadioCheckSmall.displayName = 'FormRadioCheckSmall';

export default FormRadioCheckSmall;
export { FormRadioCheckSmall };
