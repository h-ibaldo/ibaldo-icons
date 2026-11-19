import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const LockOpenCheckWide = forwardRef(function LockOpenCheckWide(
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
    createElement(Path, {"d":"M14.949462885141656,7.000000000480213c0-2.76141357421875-2.238525390625-5-5-5s-5,2.23858642578125-5,5v6","key":"0"}),
    createElement(Path, {"d":"M10.949462885144385,22.000000000480213H2.949462885141656c-.552284749830505,0-1-.447715250171314-1-1v-7c0-.552284749832324.447715250169495-1,1-1h14.000000000002728c.552284749830505,0,1,.447715250167676,1,1v1","key":"1"}),
    createElement(Polyline, {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213","key":"2"})
  );
});

LockOpenCheckWide.displayName = 'LockOpenCheckWide';

export default LockOpenCheckWide;
export { LockOpenCheckWide };
