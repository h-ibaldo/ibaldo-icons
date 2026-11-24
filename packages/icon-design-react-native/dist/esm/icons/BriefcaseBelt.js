import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const BriefcaseBelt = forwardRef(function BriefcaseBelt(
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
    createElement(Rect, {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M9,2.999999999998181h6c.551915024494001,0,1,.448084975506,1,1v3h-8v-3c0-.551915024494.448084975505999-1,1-1Z","key":"1"}),
    createElement(Line, {"x1":"2","y1":"14.999999999998181","x2":"22","y2":"14.999999999998181","key":"2"}),
    createElement(Line, {"x1":"12","y1":"13.999999999998181","x2":"12","y2":"15.999999999998181","key":"3"})
  );
});

BriefcaseBelt.displayName = 'BriefcaseBelt';

export default BriefcaseBelt;
export { BriefcaseBelt };
