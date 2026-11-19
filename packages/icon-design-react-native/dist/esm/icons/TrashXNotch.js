import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const TrashXNotch = forwardRef(function TrashXNotch(
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
    createElement(Polyline, {"points":"2.0252685457599 4.000000001481567 9.0252685457599 4.000000001481567 9.0252685457599 2.000000001481567 15.0252685457599 2.000000001481567 15.0252685457599 4.000000001481567 22.0252685457599 4.000000001481567","key":"0"}),
    createElement(Path, {"d":"M4.0252685457599,4.000000001481567v16c0,1.10456949966283.895430500338989,2,2,2h12c1.104569499661011,0,2-.89543050033717,2-2V4.000000001481567","key":"1"}),
    createElement(Line, {"x1":"9.025268545770814","y1":"16.000000001481567","x2":"15.025268545770814","y2":"10.000000001479748","key":"2"}),
    createElement(Line, {"x1":"15.025268545899962","y1":"16.000000001346962","x2":"9.025268545628933","y2":"10.000000001614353","key":"3"})
  );
});

TrashXNotch.displayName = 'TrashXNotch';

export default TrashXNotch;
export { TrashXNotch };
