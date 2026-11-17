import { createElement, forwardRef } from 'react';

const AccessibilityPerson = forwardRef(function AccessibilityPerson(
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
    createElement('circle', {"cx":"11.999999994010068","cy":"3.997565472760471","r":"2","key":"0"}),
    createElement('polyline', {"points":"3.999999994010068 6.997565472760471 8.999999994010068 8.997565472712267 14.999999994010068 8.997565472712267 19.999999994010068 6.997565472760471","key":"1"}),
    createElement('polyline', {"points":"8.999999994010068 8.997565472712267 8.999999994010068 14.997565472712267 6.999999994010068 21.997565472760471","key":"2"}),
    createElement('polyline', {"points":"14.999999993649908 8.997565472760471 14.999999993829988 14.997565472760471 16.999999994010068 21.997565472712267","key":"3"}),
    createElement('line', {"x1":"8.999999994010068","y1":"14.997565472712267","x2":"14.999999994010068","y2":"14.997565472712267","key":"4"})
  );
});

AccessibilityPerson.displayName = 'AccessibilityPerson';

export default AccessibilityPerson;
export { AccessibilityPerson };
