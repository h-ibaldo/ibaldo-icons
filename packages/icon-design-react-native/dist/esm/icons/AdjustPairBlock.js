import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const AdjustPairBlock = forwardRef(function AdjustPairBlock(
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
    createElement(Line, {"x1":"10.999999990754077","y1":"6.99999999973079","x2":"21.99999999074862","y2":"7.000000000439286","key":"0"}),
    createElement(Line, {"x1":"1.999999990754077","y1":"7.000000000170985","x2":"5.999999990754077","y2":"7.000000000308319","key":"1"}),
    createElement(Rect, {"x":"5.999999990754077","y":"2.99999999973079","width":"4.999999999999091","height":"8","rx":"1","ry":"1","key":"2"}),
    createElement(Line, {"x1":"12.999999990934157","y1":"16.99999999946067","x2":"1.999999990753167","y2":"16.999999997668965","key":"3"}),
    createElement(Line, {"x1":"21.99999999074862","y1":"16.999999999738975","x2":"17.999999990934157","y2":"16.999999999329702","key":"4"}),
    createElement(Rect, {"x":"12.999999990935066","y":"12.999999999684405","width":"5","height":"8","rx":".999999999999989","ry":".999999999999989","transform":"translate(30.999999980323992 34.000000000778527) rotate(-180)","key":"5"})
  );
});

AdjustPairBlock.displayName = 'AdjustPairBlock';

export default AdjustPairBlock;
export { AdjustPairBlock };
