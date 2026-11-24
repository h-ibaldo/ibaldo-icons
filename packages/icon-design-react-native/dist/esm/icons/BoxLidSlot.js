import { createElement, forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const BoxLidSlot = forwardRef(function BoxLidSlot(
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
    createElement(Rect, {"x":"2","y":"2.999999999998181","width":"20","height":"4","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M21,6.999999999998181v13c0,.552284749830505-.503679656439999,1-1.125,1H4.125c-.621320343560001,0-1.125-.447715250169495-1.125-1V6.999999999998181","key":"1"}),
    createElement(Rect, {"x":"8","y":"10.999999999998181","width":"8","height":"3","rx":"1","ry":"1","key":"2"})
  );
});

BoxLidSlot.displayName = 'BoxLidSlot';

export default BoxLidSlot;
export { BoxLidSlot };
