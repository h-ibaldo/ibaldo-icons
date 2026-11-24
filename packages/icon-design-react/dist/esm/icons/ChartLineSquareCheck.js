import { createElement, forwardRef } from 'react';

const ChartLineSquareCheck = forwardRef(function ChartLineSquareCheck(
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
    createElement('polyline', {"points":"16.999999990599463 4.000000005347829 18.999999990599463 6.000000005347829 21.999999990599463 3.000000005347829","key":"0"}),
    createElement('path', {"d":"M21.999999990599463,9.000000005347829v8c0,2.761423749150708-2.238576250839287,5-5,5H6.999999990599463c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000005347829c0-2.761423749150708,2.238576250850201-5,5-5h6","key":"1"}),
    createElement('polyline', {"points":"6.999999990599463 15.000000005169568 9.999999990599463 11.000000005169568 13.999999990599463 14.000000005169568 16.999999990599463 10.000000005169568","key":"2"})
  );
});

ChartLineSquareCheck.displayName = 'ChartLineSquareCheck';

export default ChartLineSquareCheck;
export { ChartLineSquareCheck };
