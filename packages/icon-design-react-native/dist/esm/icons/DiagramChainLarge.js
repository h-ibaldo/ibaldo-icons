import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const DiagramChainLarge = forwardRef(function DiagramChainLarge(
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
    createElement(Rect, {"x":"2.016630450971206","y":"2.000000000480213","width":"4","height":"6","key":"0"}),
    createElement(Rect, {"x":"18.016630450973025","y":"9.000000000480213","width":"4","height":"6","key":"1"}),
    createElement(Rect, {"x":"10.016630450973025","y":"2.000000000480213","width":"4","height":"6","key":"2"}),
    createElement(Rect, {"x":"2.016630450973025","y":"16.000000000480213","width":"4","height":"6","key":"3"}),
    createElement(Rect, {"x":"10.016630450973025","y":"16.000000000480213","width":"4","height":"6","key":"4"}),
    createElement(Line, {"x1":"6.016630450973025","y1":"5.000000000480213","x2":"10.016630450973025","y2":"5.000000000480213","key":"5"}),
    createElement(Line, {"x1":"6.016630450973025","y1":"19.000000000480213","x2":"10.016630450973025","y2":"19.000000000480213","key":"6"}),
    createElement(Path, {"d":"M14.016630450973025,5.000000000480213h5c.552284749829596,0,1,.447715250167676,1,1v3","key":"7"}),
    createElement(Path, {"d":"M14.016630450973025,19.000000000480213h5c.552284749829596,0,1-.447715250171314,1-1v-3","key":"8"})
  );
});

DiagramChainLarge.displayName = 'DiagramChainLarge';

export default DiagramChainLarge;
export { DiagramChainLarge };
