import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const Grid = forwardRef(function Grid(
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
    createElement(Rect, {"x":"2.000000005000402","y":"2.000000003888999","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement(Rect, {"x":"14.000000005000402","y":"2.000000003888999","width":"8","height":"8","rx":"1","ry":"1","key":"1"}),
    createElement(Rect, {"x":"2.000000005000402","y":"14.000000003886271","width":"8","height":"8","rx":"1","ry":"1","key":"2"}),
    createElement(Rect, {"x":"14.000000005000402","y":"14.000000003886271","width":"8","height":"8","rx":"1","ry":"1","key":"3"})
  );
});

Grid.displayName = 'Grid';

export default Grid;
export { Grid };
