import { createElement, forwardRef } from 'react';

const Form4 = forwardRef(function Form4(
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
    createElement('rect', {"x":"9.000000005000402","y":"2.000000003886271","width":"13","height":"4","rx":"1","ry":"1","key":"0"}),
    createElement('line', {"x1":"2.000000005000402","y1":"4.000000003886271","x2":"6.000000005000402","y2":"4.000000003886271","key":"1"}),
    createElement('rect', {"x":"9.000000005000402","y":"10.000000003886271","width":"13","height":"4","rx":"1","ry":"1","key":"2"}),
    createElement('rect', {"x":"9.000000005000402","y":"18.000000003886271","width":"13","height":"4","rx":"1","ry":"1","key":"3"}),
    createElement('line', {"x1":"2.000000005000402","y1":"12.000000003886271","x2":"6.000000005000402","y2":"12.000000003886271","key":"4"}),
    createElement('line', {"x1":"2.000000005000402","y1":"20.000000003886271","x2":"6.000000005000402","y2":"20.000000003886271","key":"5"})
  );
});

Form4.displayName = 'Form4';

export default Form4;
export { Form4 };
