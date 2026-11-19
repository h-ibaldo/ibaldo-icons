import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const ChevronLeftRightSquare = forwardRef(function ChevronLeftRightSquare(
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
    createElement(Rect, {"x":"2.050537039341634","y":"2.99756204273308","width":"20","height":"18.000000000400178","rx":"1.999999999994095","ry":"1.999999999994095","transform":"translate(24.101074078167692 23.995124086384191) rotate(-180)","key":"0"}),
    createElement(Polyline, {"points":"9.050537043445729 14.997562036226554 6.050537043445729 11.997562036226554 9.050537043445729 8.997562036226554","key":"1"}),
    createElement(Polyline, {"points":"15.050537043445729 14.997562036226554 18.050537043445729 11.997562036157433 15.050537043445729 8.997562036226554","key":"2"})
  );
});

ChevronLeftRightSquare.displayName = 'ChevronLeftRightSquare';

export default ChevronLeftRightSquare;
export { ChevronLeftRightSquare };
