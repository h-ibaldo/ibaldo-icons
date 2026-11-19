import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const PopoverWindowPlain = forwardRef(function PopoverWindowPlain(
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
    createElement(Path, {"d":"M19,18h-4l-3,4-3-4h-4c-1.104569499659192,0-2-.895430500338989-2-2V4c0-1.104569499661011.895430500340808-2,2-2h14c1.104569499670106,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500329894,2-2,2Z","key":"0"}),
    createElement(Line, {"x1":"3","y1":"6","x2":"21","y2":"6","key":"1"}),
    createElement(Line, {"x1":"7","y1":"10","x2":"17","y2":"10","key":"2"}),
    createElement(Line, {"x1":"7","y1":"14","x2":"15","y2":"14","key":"3"})
  );
});

PopoverWindowPlain.displayName = 'PopoverWindowPlain';

export default PopoverWindowPlain;
export { PopoverWindowPlain };
