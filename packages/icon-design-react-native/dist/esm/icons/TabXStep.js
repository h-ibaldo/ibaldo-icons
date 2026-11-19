import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const TabXStep = forwardRef(function TabXStep(
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
    createElement(Polyline, {"points":"13.149805218629808 21.997565477288845 2.050537104500108 21.997565477288845 2.050537104500108 1.997565477288845 11.050537104500108 1.997565477288845 11.050537104500108 5.997565477288845 22.050537104500108 5.997565477288845 22.050537104500108 12.997565477288845","key":"0"}),
    createElement(Line, {"x1":"22.050537104500108","y1":"1.997565477288845","x2":"15.050537104500108","y2":"1.997565477288845","key":"1"}),
    createElement(Line, {"x1":"17.050537104500108","y1":"16.997565477288845","x2":"22.050537104500108","y2":"21.997565477288845","key":"2"}),
    createElement(Line, {"x1":"22.050537104500108","y1":"16.997565477288845","x2":"17.050537104500108","y2":"21.997565477288845","key":"3"})
  );
});

TabXStep.displayName = 'TabXStep';

export default TabXStep;
export { TabXStep };
