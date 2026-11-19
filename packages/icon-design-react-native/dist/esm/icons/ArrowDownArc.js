import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const ArrowDownArc = forwardRef(function ArrowDownArc(
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
    createElement(Path, {"d":"M21.00000000018008,12.000000000842192c0,4.970562748196244-4.029437251800118,9-9,9S3.00000000018008,16.970562749038436,3.00000000018008,12.000000000842192","key":"0"}),
    createElement(Polyline, {"points":"8.00000000018008 11.000000000842192 12.00000000018008 15.000000000842192 16.00000000018008 11.000000000842192","key":"1"}),
    createElement(Line, {"x1":"12.00000000018008","y1":"3.000000000842192","x2":"12.00000000018008","y2":"15.000000000842192","key":"2"})
  );
});

ArrowDownArc.displayName = 'ArrowDownArc';

export default ArrowDownArc;
export { ArrowDownArc };
