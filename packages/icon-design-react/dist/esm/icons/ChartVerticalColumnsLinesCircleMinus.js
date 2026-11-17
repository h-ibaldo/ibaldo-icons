import { createElement, forwardRef } from 'react';

const ChartVerticalColumnsLinesCircleMinus = forwardRef(function ChartVerticalColumnsLinesCircleMinus(
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
    createElement('line', {"x1":"7.999999999959982","y1":"15","x2":"7.999999999959982","y2":"12","key":"0"}),
    createElement('line', {"x1":"11.999999999959982","y1":"15","x2":"11.999999999959982","y2":"9","key":"1"}),
    createElement('line', {"x1":"15.999999999959982","y1":"15","x2":"15.999999999959982","y2":"11","key":"2"}),
    createElement('line', {"x1":"17","y1":"5.000000000090949","x2":"21.999999999909051","y2":"5","key":"3"}),
    createElement('path', {"d":"M13,2.05047607421875c-.328857421869543-.03289794921875-.662353515619543-.05047607421875-1-.05047607421875C6.47705078125,2,2,6.4771728515625,2,12c0,5.52294921875,4.47705078125,10,10,10s10-4.47705078125,10-10c0-.68505859375-.069580078119543-1.353759765625-.200927734369543-2","key":"4"})
  );
});

ChartVerticalColumnsLinesCircleMinus.displayName = 'ChartVerticalColumnsLinesCircleMinus';

export default ChartVerticalColumnsLinesCircleMinus;
export { ChartVerticalColumnsLinesCircleMinus };
