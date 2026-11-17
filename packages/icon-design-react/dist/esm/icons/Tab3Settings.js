import { createElement, forwardRef } from 'react';

const Tab3Settings = forwardRef(function Tab3Settings(
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
    createElement('polygon', {"points":"22.000000004678441 21.999999999999091 2.000000004678441 21.999999999999091 2.000000004678441 1.999999999999091 10.000000004678441 1.999999999999091 13.000000004678441 5.999999999999091 22.000000004678441 5.999999999999091 22.000000004678441 21.999999999999091","key":"0"}),
    createElement('polyline', {"points":"15.000000004678441 1.999999999999091 22.000000004678441 1.999999999999091 22.000000004678441 5.999999999999091","key":"1"}),
    createElement('line', {"x1":"8.000000004678441","y1":"14.009999999999309","x2":"8.000000004678441","y2":"13.999999999999091","key":"2"}),
    createElement('line', {"x1":"12.000000004678441","y1":"14.009999999999309","x2":"12.000000004678441","y2":"13.999999999999091","key":"3"}),
    createElement('line', {"x1":"16.000000004678441","y1":"14.009999999999309","x2":"16.000000004678441","y2":"13.999999999999091","key":"4"})
  );
});

Tab3Settings.displayName = 'Tab3Settings';

export default Tab3Settings;
export { Tab3Settings };
