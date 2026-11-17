import { createElement, forwardRef } from 'react';

const ConnectCircle4 = forwardRef(function ConnectCircle4(
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
    createElement('circle', {"cx":"5","cy":"4.999999999998181","r":"2","key":"0"}),
    createElement('circle', {"cx":"19","cy":"4.999999999998181","r":"2","key":"1"}),
    createElement('circle', {"cx":"5","cy":"18.999999999998181","r":"2","key":"2"}),
    createElement('circle', {"cx":"19","cy":"18.999999999998181","r":"2","key":"3"}),
    createElement('path', {"d":"M6.4794921875,20.334960937498181c1.58251953125,1.05029296875,3.47900390625,1.6650390625,5.5205078125,1.6650390625s3.93798828125-.61474609375,5.5205078125-1.6650390625","key":"4"}),
    createElement('path', {"d":"M3.6650390625,6.479492187498181c-1.05029296875,1.58251953125-1.6650390625,3.47900390625-1.6650390625,5.5205078125s.61474609375,3.93798828125,1.6650390625,5.5205078125","key":"5"}),
    createElement('path', {"d":"M17.5205078125,3.665039062498181c-1.58251953125-1.05029296875-3.47900390625-1.6650390625-5.5205078125-1.6650390625s-3.93798828125.61474609375-5.5205078125,1.6650390625","key":"6"}),
    createElement('path', {"d":"M20.3349609375,17.520507812498181c1.05029296875-1.58251953125,1.6650390625-3.47900390625,1.6650390625-5.5205078125s-.61474609375-3.93798828125-1.6650390625-5.5205078125","key":"7"})
  );
});

ConnectCircle4.displayName = 'ConnectCircle4';

export default ConnectCircle4;
export { ConnectCircle4 };
