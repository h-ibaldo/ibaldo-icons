import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const VotePlusMinus = forwardRef(function VotePlusMinus(
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
    createElement(Line, {"x1":"11.516630450973935","y1":"4.000000000480213","x2":"11.516630450973935","y2":"13.000000000476575","key":"0"}),
    createElement(Line, {"x1":"16.016630450973935","y1":"8.500000000476575","x2":"7.016630450973935","y2":"8.500000000476575","key":"1"}),
    createElement(Line, {"x1":"16.016630450973935","y1":"19.500000000476575","x2":"7.016630450973935","y2":"19.500000000476575","key":"2"})
  );
});

VotePlusMinus.displayName = 'VotePlusMinus';

export default VotePlusMinus;
export { VotePlusMinus };
