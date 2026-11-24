import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const EyeLidded = forwardRef(function EyeLidded(
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
    createElement(Path, {"d":"M12.025268548975873,5.997565475895499c-4.272705078119543,0-8.178466796869543,2.44097900390625-10,6,1.821533203130457,3.55902099609375,5.727294921880457,6,10,6,4.272705078130457,0,8.178466796880457-2.44097900390625,10-6-1.821533203119543-3.55902099609375-5.727294921869543-6-10-6Z","key":"0"}),
    createElement(Path, {"d":"M7.470581048975873,6.954901901676749c-.281005859369543.62493896484375-.4453125,1.3131103515625-.4453125,2.04266357421875,0,2.76141357421875,2.238525390630457,5,5,5,2.761474609380457,0,5-2.23858642578125,5-5,0-.72955322265625-.164306640619543-1.417724609375-.4453125-2.04266357421875","key":"1"})
  );
});

EyeLidded.displayName = 'EyeLidded';

export default EyeLidded;
export { EyeLidded };
