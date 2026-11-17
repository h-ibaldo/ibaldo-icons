import { createElement, forwardRef } from 'react';

const SunDottedLarge = forwardRef(function SunDottedLarge(
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
    createElement('line', {"x1":"12","y1":"21.989999999997963","x2":"12","y2":"21.999999999998181","key":"0"}),
    createElement('line', {"x1":"12","y1":"2.009999999998399","x2":"12","y2":"1.999999999998181","key":"1"}),
    createElement('line', {"x1":"2.010000000000218","y1":"11.999999999998181","x2":"2","y2":"11.999999999998181","key":"2"}),
    createElement('line', {"x1":"21.989999999999782","y1":"11.999999999998181","x2":"22","y2":"11.999999999998181","key":"3"}),
    createElement('line', {"x1":"4.93893218829362","y1":"19.061067812022884","x2":"4.928932188293402","y2":"19.071067812023102","key":"4"}),
    createElement('line', {"x1":"19.06106781170638","y1":"4.938932187975297","x2":"19.071067811706598","y2":"4.928932187975079","key":"5"}),
    createElement('line', {"x1":"4.938932187977116","y1":"4.938932188291801","x2":"4.928932187976898","y2":"4.928932188291583","key":"6"}),
    createElement('line', {"x1":"19.061067812024703","y1":"19.061067811704561","x2":"19.071067812024921","y2":"19.071067811704779","key":"7"}),
    createElement('circle', {"cx":"12","cy":"12.000000005924448","r":"6","key":"8"})
  );
});

SunDottedLarge.displayName = 'SunDottedLarge';

export default SunDottedLarge;
export { SunDottedLarge };
