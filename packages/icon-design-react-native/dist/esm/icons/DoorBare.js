import { createElement, forwardRef } from 'react';
import Svg, { Polygon, Polyline } from 'react-native-svg';

const DoorBare = forwardRef(function DoorBare(
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
    createElement(Polygon, {"points":"19.974731450043691 19.000000000481123 9.974731450043691 22.000000000481123 9.974731450043691 2.000000000481123 19.974731450043691 5.000000000481123 19.974731450043691 19.000000000481123","key":"0"}),
    createElement(Polyline, {"points":"6.974731450043691 20.000000000481123 3.974731450043691 20.000000000481123 3.974731450043691 4.000000000481123 6.974731450043691 4.000000000481123","key":"1"})
  );
});

DoorBare.displayName = 'DoorBare';

export default DoorBare;
export { DoorBare };
