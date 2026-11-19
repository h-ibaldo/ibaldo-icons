import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowSyncClockwiseAngular = forwardRef(function ArrowSyncClockwiseAngular(
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
    createElement(Path, {"d":"M3,4l4,.000000000080036-.000000000090949,3.999999999919964","key":"0"}),
    createElement(Path, {"d":"M21,20.00000000036016l-4-.000000000451109.000000000447471-3.999999999909051","key":"1"}),
    createElement(Path, {"d":"M17,19.482360839840112c2.411437988277612-1.614624023441138,4-4.362426757810681,4-7.482360839840112,0-4.970581054691138-4.0294189453125-9-9-9-.338562011722388,0-.671813964840112.021362304680224-1,.059509277340112","key":"2"}),
    createElement(Path, {"d":"M7.000000001469743,4.517639159699684c-2.411437988419493,1.614624023219221-4.000000000389264,4.362426757459616-4.000000000672117,7.482360839489047-.000000000437467,4.970581054691138,4.029418944511235,9.00000000036016,8.999999999191459,9.000000000811269.33856201171875.000000000029104.671813964851026-.021362304631111,1.000000000010914-.059509277260076","key":"3"})
  );
});

ArrowSyncClockwiseAngular.displayName = 'ArrowSyncClockwiseAngular';

export default ArrowSyncClockwiseAngular;
export { ArrowSyncClockwiseAngular };
