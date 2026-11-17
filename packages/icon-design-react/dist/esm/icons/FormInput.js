import { createElement, forwardRef } from 'react';

const FormInput = forwardRef(function FormInput(
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
    createElement('rect', {"x":"2","y":"6","width":"20","height":"12.000000000003638","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"10","y1":"13.989999999999782","x2":"10","y2":"14","key":"1"}),
    createElement('line', {"x1":"6","y1":"13.989999999999782","x2":"6","y2":"14","key":"2"}),
    createElement('line', {"x1":"14","y1":"13.989999999999782","x2":"14","y2":"14","key":"3"})
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
export { FormInput };
