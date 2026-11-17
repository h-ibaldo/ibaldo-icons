import { createElement, forwardRef } from 'react';

const GripDotsHorizontal = forwardRef(function GripDotsHorizontal(
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
    createElement('rect', {"x":"2.025268547038195","y":"5.998782721722748","width":"4.000000022223503","height":"4.000000014685753","rx":"1.999998008401924","ry":"1.999998008401924","key":"0"}),
    createElement('rect', {"x":"10.025268555652929","y":"5.998782721722748","width":"4.000000004994035","height":"4.000000014685753","rx":"1.999997999787305","ry":"1.999997999787305","key":"1"}),
    createElement('rect', {"x":"18.025268564267662","y":"5.998782721722748","width":"3.999999987764568","height":"4.000000014685753","rx":"1.999997991172459","ry":"1.999997991172459","key":"2"}),
    createElement('rect', {"x":"2.025268547038195","y":"13.998782721140657","width":"4.000000022223503","height":"4.000000015849935","rx":"1.999998015968912","ry":"1.999998015968912","key":"3"}),
    createElement('rect', {"x":"10.025268555652929","y":"13.998782721140657","width":"4.000000004994035","height":"4.000000015849935","rx":"1.99999800735418","ry":"1.99999800735418","key":"4"}),
    createElement('rect', {"x":"18.025268564267662","y":"13.998782721140657","width":"3.999999987764568","height":"4.000000015849935","rx":"1.999997998739447","ry":"1.999997998739447","key":"5"})
  );
});

GripDotsHorizontal.displayName = 'GripDotsHorizontal';

export default GripDotsHorizontal;
export { GripDotsHorizontal };
