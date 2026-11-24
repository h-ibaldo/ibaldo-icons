import { createElement, forwardRef } from 'react';

const AccessibilityNodes = forwardRef(function AccessibilityNodes(
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
    createElement('circle', {"cx":"12.025268549329667","cy":"3.997565476096497","r":"2","key":"0"}),
    createElement('line', {"x1":"9.025268549329667","y1":"13.997565476048294","x2":"15.025268548970416","y2":"13.997565476048294","key":"1"}),
    createElement('line', {"x1":"15.025268548970416","y1":"8.997565476096497","x2":"9.025268549329667","y2":"8.997565476096497","key":"2"}),
    createElement('g', {"key":"3"},
      createElement('circle', {"cx":"4.025268548970416","cy":"6.997565476096497","r":"2","key":"0"}),
      createElement('circle', {"cx":"6.025268548970416","cy":"19.997565476096497","r":"2","key":"1"}),
      createElement('polyline', {"points":"6.916137689599964 18.215766159689338 9.025268548970416 13.997565476096497 9.025268548970416 8.997565476096497 5.879516595849964 7.739264694846497","key":"2"})),
    createElement('g', {"key":"4"},
      createElement('circle', {"cx":"20.025268548969962","cy":"6.997565476030104","r":"2.000000000000227","key":"0"}),
      createElement('circle', {"cx":"18.025268549552266","cy":"19.997565476120144","r":"1.999999999999204","key":"1"}),
      createElement('polyline', {"points":"17.134399408850186 18.215766159754821 15.025268549279645 13.997565476255659 15.025268549059547 8.997565476255659 18.171020502129977 7.739264694863778","key":"2"}))
  );
});

AccessibilityNodes.displayName = 'AccessibilityNodes';

export default AccessibilityNodes;
export { AccessibilityNodes };
