import { createElement, forwardRef } from 'react';

const ChartVerticalColumnsLinesCirclePlus = forwardRef(function ChartVerticalColumnsLinesCirclePlus(
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
    createElement('line', {"x1":"19.5","y1":"7.499999999909051","x2":"19.499999999909051","y2":"2.5","key":"3"}),
    createElement('line', {"x1":"17","y1":"5","x2":"21.999999999909051","y2":"4.999999999909051","key":"4"}),
    createElement('path', {"d":"M14,2.200927734375c-.646240234369543-.13134765625-1.31494140625-.200927734375-2-.200927734375C6.47705078125,2,2,6.4771728515625,2,12c0,5.52294921875,4.47705078125,10,10,10s10-4.47705078125,10-10c0-.33758544921875-.017578125-.67108154296875-.050537109369543-1","key":"5"})
  );
});

ChartVerticalColumnsLinesCirclePlus.displayName = 'ChartVerticalColumnsLinesCirclePlus';

export default ChartVerticalColumnsLinesCirclePlus;
export { ChartVerticalColumnsLinesCirclePlus };
