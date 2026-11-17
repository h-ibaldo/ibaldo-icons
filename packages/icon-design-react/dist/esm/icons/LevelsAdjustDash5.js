import { createElement, forwardRef } from 'react';

const LevelsAdjustDash5 = forwardRef(function LevelsAdjustDash5(
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
    createElement('line', {"x1":"15.999999990303877","y1":"12.000000000667569","x2":"1.999999990620381","y2":"12.000000000170985","key":"0"}),
    createElement('line', {"x1":"21.999999990619472","y1":"12.000000001068656","x2":"19.999999990303877","y2":"12.000000000937689","key":"1"}),
    createElement('line', {"x1":"11.999999990303877","y1":"19.000000000578439","x2":"21.999999990297511","y2":"19.000000001068656","key":"2"}),
    createElement('line', {"x1":"1.999999990303877","y1":"19.000000000170985","x2":"7.999999990303877","y2":"19.000000000308319","key":"3"}),
    createElement('line', {"x1":"11.999999990303877","y1":"4.999999999948159","x2":"21.99999999092779","y2":"5.000000000439286","key":"4"}),
    createElement('line', {"x1":"1.999999990933247","y1":"5.000000000170985","x2":"7.999999990303877","y2":"5.000000000308319","key":"5"}),
    createElement('line', {"x1":"7.999999990303877","y1":"2.000000000439286","x2":"7.999999990303877","y2":"8.000000000439286","key":"6"}),
    createElement('line', {"x1":"15.999999990303877","y1":"9.000000000439286","x2":"15.999999990303877","y2":"15.000000000439286","key":"7"}),
    createElement('line', {"x1":"7.999999990303877","y1":"16.000000000439286","x2":"7.999999990303877","y2":"22.000000000439286","key":"8"})
  );
});

LevelsAdjustDash5.displayName = 'LevelsAdjustDash5';

export default LevelsAdjustDash5;
export { LevelsAdjustDash5 };
