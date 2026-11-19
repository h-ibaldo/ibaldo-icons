import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const Overscan = forwardRef(function Overscan(
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
    createElement(Rect, {"x":"1.974731449505271","y":"2.000000000479304","width":"20","height":"20.000000000000909","rx":"2.999999999999863","ry":"2.999999999999863","key":"0"}),
    createElement(Polyline, {"points":"13.974731449905448 7.000000000659384 11.974731450083709 5.000000000479304 9.974731449905448 7.000000000301952","key":"1"}),
    createElement(Polyline, {"points":"13.974731449905448 17.000000000298314 11.974731450083709 19.000000000480213 9.974731449905448 17.000000000659384","key":"2"}),
    createElement(Polyline, {"points":"6.974731449774481 10.000000000211003 4.974731449505271 11.999999999941792 6.97473144923606 14.000000000211003","key":"3"}),
    createElement(Polyline, {"points":"16.974731449414321 10.000000000571163 18.974731449505271 12.000000000480213 16.97473144959622 14.000000000571163","key":"4"})
  );
});

Overscan.displayName = 'Overscan';

export default Overscan;
export { Overscan };
