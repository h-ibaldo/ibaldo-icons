import { createElement, forwardRef } from 'react';

const ProgressSpinnerRadiating3 = forwardRef(function ProgressSpinnerRadiating3(
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
    createElement('line', {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"5.000000000480213","key":"0"}),
    createElement('line', {"x1":"11.949462885142566","y1":"19.000000000480213","x2":"11.949462885142566","y2":"22.000000000480213","key":"1"}),
    createElement('line', {"x1":"1.949462885144385","y1":"12.000000000029104","x2":"4.949462885142566","y2":"12.000000000163709","key":"2"}),
    createElement('line', {"x1":"18.949462885142566","y1":"12.000000000793079","x2":"21.949462885142566","y2":"12.000000000927685","key":"3"}),
    createElement('line', {"x1":"4.878395073435968","y1":"4.928932188457111","x2":"6.999715416946856","y2":"7.050252532062586","key":"4"}),
    createElement('line', {"x1":"16.899210353337367","y1":"16.94974746889784","x2":"19.020530696850983","y2":"19.071067812503316","key":"5"}),
    createElement('line', {"x1":"4.878395072802959","y1":"19.071067811866669","x2":"6.999715416503932","y2":"16.949747468450369","key":"6"}),
    createElement('line', {"x1":"16.899210353783928","y1":"7.05025253250642","x2":"19.020530697483991","y2":"4.928932189090119","key":"7"})
  );
});

ProgressSpinnerRadiating3.displayName = 'ProgressSpinnerRadiating3';

export default ProgressSpinnerRadiating3;
export { ProgressSpinnerRadiating3 };
