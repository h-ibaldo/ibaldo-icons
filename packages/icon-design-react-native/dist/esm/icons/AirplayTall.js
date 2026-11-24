import { createElement, forwardRef } from 'react';
import Svg, { Path, Polygon } from 'react-native-svg';

const AirplayTall = forwardRef(function AirplayTall(
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
    createElement(Path, {"d":"M17.999999971900252,15.999996564601133h2c1.104553222659888,0,2-1.044687906902254,2-2.333333333332121V4.333329897933254c0-1.288645426429866-.895446777340112-2.333333333332121-2-2.333333333332121H3.999999971900252c-1.104553222659888,0-2,1.044687906902254-2,2.333333333332121v9.333333333335759c0,1.288645426429866.895446777340112,2.333333333332121,2,2.333333333332121h2","key":"0"}),
    createElement(Polygon, {"points":"11.999999971900252 14.999996564601133 6.999999971889338 21.999996564601133 16.999999971889338 21.999996564601133 11.999999971900252 14.999996564601133","key":"1"})
  );
});

AirplayTall.displayName = 'AirplayTall';

export default AirplayTall;
export { AirplayTall };
