import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const TabArrowRightXStep = forwardRef(function TabArrowRightXStep(
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
    createElement(Polyline, {"points":"13.149805218625261 21.997565477288845 2.050537104505565 21.997565477288845 2.050537104505565 1.997565477288845 11.050537104505565 1.997565477288845 11.050537104505565 5.997565477288845 22.050537104505565 5.997565477288845 22.050537104505565 12.997565477288845","key":"0"}),
    createElement(Line, {"x1":"22.050537104505565","y1":"1.997565477288845","x2":"15.050537104505565","y2":"1.997565477288845","key":"1"}),
    createElement(Line, {"x1":"17.050537104505565","y1":"16.997565477288845","x2":"22.050537104505565","y2":"21.997565477288845","key":"2"}),
    createElement(Line, {"x1":"22.050537104505565","y1":"16.997565477288845","x2":"17.050537104505565","y2":"21.997565477288845","key":"3"}),
    createElement(Line, {"x1":"7.050537104505565","y1":"13.997565477288845","x2":"14.050537104505565","y2":"13.997565477288845","key":"4"}),
    createElement(Polyline, {"points":"11.050537104505565 10.997565477288845 14.050537104505565 13.997565477288845 11.050537104505565 16.997565477288845","key":"5"})
  );
});

TabArrowRightXStep.displayName = 'TabArrowRightXStep';

export default TabArrowRightXStep;
export { TabArrowRightXStep };
