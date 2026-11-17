import { createElement, forwardRef } from 'react';

const FormCentered = forwardRef(function FormCentered(
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
    createElement('rect', {"x":"2.000000005000402","y":"2.000000003886271","width":"20","height":"5","rx":"1","ry":"1","key":"0"}),
    createElement('rect', {"x":"2.000000005000402","y":"11.000000003886271","width":"20","height":"5","rx":"1","ry":"1","key":"1"}),
    createElement('rect', {"x":"7.000000002616162","y":"20.000000004948035","width":"10","height":"1.999999987357029","rx":".999998940923852","ry":".999998940923852","key":"2"})
  );
});

FormCentered.displayName = 'FormCentered';

export default FormCentered;
export { FormCentered };
