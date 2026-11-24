import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const TabDownloadSharp = forwardRef(function TabDownloadSharp(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Polyline, {"points":"11.999999993611709 21.998779299956368 1.999999993611709 21.998779299956368 1.999999993611709 1.998779299956368 9.999999993611709 1.998779299956368 12.999999993611709 5.998779299956368 21.999999993611709 5.998779299956368 21.999999993611709 11.998779299956368","key":"0"}),
    createElement(Polyline, {"points":"14.999999993611709 1.998779299956368 21.999999993611709 1.998779299956368 21.999999993611709 5.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"21.999999993611709 18.998779299956368 18.999999993611709 21.998779299956368 15.999999993611709 18.998779299956368","key":"2"}),
    createElement(Line, {"x1":"18.999999993611709","y1":"14.998779299956368","x2":"18.999999993611709","y2":"21.998779299956368","key":"3"})
  );
});

TabDownloadSharp.displayName = 'TabDownloadSharp';

export default TabDownloadSharp;
export { TabDownloadSharp };
