import { createElement, forwardRef } from 'react';

const FormLabels = forwardRef(function FormLabels(
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
    createElement('rect', {"x":"2.000000005000402","y":"5.000000003886271","width":"20","height":"5","rx":"1","ry":"1","key":"0"}),
    createElement('rect', {"x":"2.000000005000402","y":"17.000000003886271","width":"20","height":"5","rx":"1","ry":"1","key":"1"}),
    createElement('line', {"x1":"2.000000005000402","y1":"14.000000003886271","x2":"12.000000005000402","y2":"14.000000003886271","key":"2"}),
    createElement('line', {"x1":"2.000000005000402","y1":"2.056394887018541","x2":"12.000000005000402","y2":"2.056394887018541","key":"3"})
  );
});

FormLabels.displayName = 'FormLabels';

export default FormLabels;
export { FormLabels };
