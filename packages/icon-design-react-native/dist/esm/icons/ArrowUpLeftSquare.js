import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const ArrowUpLeftSquare = forwardRef(function ArrowUpLeftSquare(
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
    createElement(Rect, {"x":"2.000000001433364","y":"1.999999999045031","width":"20","height":"20","rx":"1.999999999999545","ry":"1.999999999999545","key":"0"}),
    createElement(Polyline, {"points":"14.000000000129148 8.999999999132342 9.000000000129148 8.999999998910425 8.999999999909051 13.999999998910425","key":"1"}),
    createElement(Line, {"x1":"14.999999999859938","y1":"14.999999999179636","x2":"9.000000000129148","y2":"8.999999998910425","key":"2"})
  );
});

ArrowUpLeftSquare.displayName = 'ArrowUpLeftSquare';

export default ArrowUpLeftSquare;
export { ArrowUpLeftSquare };
