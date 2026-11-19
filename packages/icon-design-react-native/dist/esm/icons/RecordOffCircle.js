import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const RecordOffCircle = forwardRef(function RecordOffCircle(
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
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement(Path, {"d":"M17 8L7 16","key":"1"}),
    createElement(Path, {"d":"M8.891 14.488C9.625 15.402 10.738 16 12 16C14.207 16 16 14.207 16 12C16 11.055 15.66 10.195 15.109 9.512","key":"2"}),
    createElement(Path, {"d":"M12.445 8.043C12.297 8.027 12.152 8 12 8C9.941 8 8.262 9.563 8.043 11.566","key":"3"})
  );
});

RecordOffCircle.displayName = 'RecordOffCircle';

export default RecordOffCircle;
export { RecordOffCircle };
