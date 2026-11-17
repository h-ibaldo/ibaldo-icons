import { createElement, forwardRef } from 'react';

const ChartVerticalColumnsRectangleArrowIn = forwardRef(function ChartVerticalColumnsRectangleArrowIn(
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
    createElement('path', {"d":"M1.97473143984098,9.000000005235052l.000000000718501,8c.000000000240107,2.761423749150708,2.238576251291306,4.999999999799911,5.000000000440195,4.999999999552529l10-.000000000902219c2.761423749150708-.000000000251021,4.999999999799911-2.238576251300401,4.999999999559805-5.000000000447471l-.000000000909495-10c-.000000000240107-2.761423749150708-2.238576251289487-4.999999999803549-5.000000000440195-4.999999999552529l-4.999999999110514.000000000542059","key":"0"}),
    createElement('polyline', {"points":"5.974731440099276 6.000000004336471 7.974731440099276 4.000000004336471 5.974731440099276 2.000000004336471","key":"1"}),
    createElement('line', {"x1":"1.974731440099276","y1":"4.000000004336471","x2":"7.974731440099276","y2":"4.000000004336471","key":"2"}),
    createElement('rect', {"x":"13.974731440034702","y":"10.000000004065441","width":"4","height":"6","transform":"translate(31.949462879490056 26.000000008842797) rotate(-180)","key":"3"}),
    createElement('rect', {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"9","transform":"translate(23.949462879675593 23.000000008315268) rotate(-180)","key":"4"}),
    createElement('rect', {"x":"5.974731440010146","y":"11.000000003705281","width":"4","height":"5","transform":"translate(15.949462879418663 27.000000007765959) rotate(-180)","key":"5"})
  );
});

ChartVerticalColumnsRectangleArrowIn.displayName = 'ChartVerticalColumnsRectangleArrowIn';

export default ChartVerticalColumnsRectangleArrowIn;
export { ChartVerticalColumnsRectangleArrowIn };
