import { createElement, forwardRef } from 'react';

const ChartBarSquareArrowRightThin = forwardRef(function ChartBarSquareArrowRightThin(
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
    createElement('path', {"d":"M1.97473143984098,9.00000000478758l.000000000718501,8c.000000000240107,2.76142374914707,2.238576251300401,4.999999999799911,5.000000000440195,4.999999999548891l10-.000000000898581c2.761423749150708-.000000000251021,4.999999999799911-2.238576251300401,4.999999999559805-5.000000000451109l-.000000000909495-10c-.000000000240107-2.761423749150708-2.238576251289487-4.999999999799911-5.000000000440195-4.999999999548891l-4.999999999110514.000000000538421","key":"0"}),
    createElement('polyline', {"points":"5.974731440099276 6.000000003885361 7.974731440099276 4.000000003885361 5.974731440099276 2.000000003885361","key":"1"}),
    createElement('line', {"x1":"1.974731440099276","y1":"4.000000003885361","x2":"7.974731440099276","y2":"4.000000003885361","key":"2"}),
    createElement('line', {"x1":"7.974731440099276","y1":"16.000000003885361","x2":"7.974731440099276","y2":"12.000000003885361","key":"3"}),
    createElement('line', {"x1":"11.974731440099276","y1":"16.000000003885361","x2":"11.974731440099276","y2":"8.000000003885361","key":"4"}),
    createElement('line', {"x1":"15.974731440099276","y1":"16.000000003885361","x2":"15.974731440099276","y2":"11.000000003885361","key":"5"})
  );
});

ChartBarSquareArrowRightThin.displayName = 'ChartBarSquareArrowRightThin';

export default ChartBarSquareArrowRightThin;
export { ChartBarSquareArrowRightThin };
