import { createElement, forwardRef } from 'react';

const SpinnerRaysFade = forwardRef(function SpinnerRaysFade(
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
    createElement('line', {"x1":"21.949462885140747","y1":"12.000000000480213","x2":"16.949462885140747","y2":"12.000000000480213","key":"0"}),
    createElement('line', {"x1":"19.020530697163849","y1":"19.071067812186811","x2":"15.484996791152298","y2":"15.535533906331693","key":"1"}),
    createElement('line', {"x1":"11.949462885142566","y1":"20.000000000480213","x2":"11.949462885142566","y2":"22.000000000480213","key":"2"}),
    createElement('line', {"x1":"6.292608635778379","y1":"17.65685425009724","x2":"4.878395073435968","y2":"19.071067812503316","key":"3"}),
    createElement('line', {"x1":"1.949462885144385","y1":"12.000000000029104","x2":"4.949462885142566","y2":"12.000000000163709","key":"4"}),
    createElement('line', {"x1":"4.878395073435968","y1":"4.928932188457111","x2":"6.999715416946856","y2":"7.050252532062586","key":"5"}),
    createElement('line', {"x1":"11.949462885142566","y1":"2.000000000480213","x2":"11.949462885142566","y2":"6.000000000480213","key":"6"}),
    createElement('line', {"x1":"19.020530697165668","y1":"4.928932188773615","x2":"16.192103572356245","y2":"7.757359313454799","key":"7"})
  );
});

SpinnerRaysFade.displayName = 'SpinnerRaysFade';

export default SpinnerRaysFade;
export { SpinnerRaysFade };
