import { createElement, forwardRef } from 'react';

const ClockArrowCircle = forwardRef(function ClockArrowCircle(
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
    createElement('polyline', {"points":"12 6.999999999869033 12 11.999999999869033 17 11.999999999869033","key":"0"}),
    createElement('polyline', {"points":"2 13.999999999869033 2 16.999999999869033 5 16.999999999869033","key":"1"}),
    createElement('path', {"d":"M3.885192871090112,20.999999999869033c.699035644540345.61737060546875,1.607421875,1,2.614807128909888,1,2.209167480470569,0,4-1.79083251953125,4-4,0-2.209167480470569-1.790832519529431-4-4-4-1.861755371090112,0-3.412536621090112,1.277770996090112-3.858581542970569,3","key":"2"}),
    createElement('path', {"d":"M13,21.949523925648464c5.05322265625-.501892089840112,9-4.764282226560681,9-9.949523925779431,0-5.522888183601026-4.477172851560681-10-10-10C7.162475585939319,1.999999999869033,3.131103515630457,5.436096191268007,2.204223632810681,9.999999999869033","key":"3"})
  );
});

ClockArrowCircle.displayName = 'ClockArrowCircle';

export default ClockArrowCircle;
export { ClockArrowCircle };
