import { createElement, forwardRef } from 'react';

const ClockNotificationCircle = forwardRef(function ClockNotificationCircle(
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
    createElement('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"0"}),
    createElement('circle', {"cx":"18.5","cy":"18.499999999887223","r":"3.5","key":"1"}),
    createElement('path', {"d":"M21.085571289060681,16.159362792857792c.581481933599207-1.267822265630457.914428710939319-2.673278808599207.914428710939319-4.159362792970569,0-5.522888183590112-4.477172851560681-10-10-10S2,6.477111816297111,2,11.999999999887223c0,5.522827148441138,4.477172851560681,10,10,10,1.486083984369543,0,2.891540527340112-.332946777340112,4.159362792970569-.914428710939319","key":"2"})
  );
});

ClockNotificationCircle.displayName = 'ClockNotificationCircle';

export default ClockNotificationCircle;
export { ClockNotificationCircle };
