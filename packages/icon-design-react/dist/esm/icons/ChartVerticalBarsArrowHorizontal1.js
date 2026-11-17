import { createElement, forwardRef } from 'react';

const ChartVerticalBarsArrowHorizontal1 = forwardRef(function ChartVerticalBarsArrowHorizontal1(
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
    createElement('line', {"x1":"22.016630451129458","y1":"12.000000000480213","x2":"22.016630450545563","y2":"22.000000001378794","key":"0"}),
    createElement('line', {"x1":"18.016630451037599","y1":"12.000000000480213","x2":"18.016630450545563","y2":"22.000000001196895","key":"1"}),
    createElement('line', {"x1":"14.016630450951197","y1":"12.000000000480213","x2":"14.016630450545563","y2":"22.000000001018634","key":"2"}),
    createElement('line', {"x1":"10.016630450860248","y1":"12.000000000480213","x2":"10.016630450545563","y2":"22.000000000840373","key":"3"}),
    createElement('line', {"x1":"6.016630450769298","y1":"12.000000000480213","x2":"6.016630450545563","y2":"22.000000000658474","key":"4"}),
    createElement('line', {"x1":"2.016630450681077","y1":"12.000000000480213","x2":"2.016630450545563","y2":"22.000000000480213","key":"5"}),
    createElement('polyline', {"points":"19.016630450973025 2.000000000480213 22.016630450973025 5.000000000480213 19.016630450973025 8.000000000480213","key":"6"}),
    createElement('line', {"x1":"22.016630450973025","y1":"5.000000000480213","x2":"2.016630450973025","y2":"5.000000000480213","key":"7"})
  );
});

ChartVerticalBarsArrowHorizontal1.displayName = 'ChartVerticalBarsArrowHorizontal1';

export default ChartVerticalBarsArrowHorizontal1;
export { ChartVerticalBarsArrowHorizontal1 };
