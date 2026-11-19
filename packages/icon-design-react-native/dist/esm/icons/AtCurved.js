import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const AtCurved = forwardRef(function AtCurved(
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
    createElement(Circle, {"cx":"12.000000005029506","cy":"12.000000000453838","r":"4","key":"0"}),
    createElement(Path, {"d":"M12.000000005029506,3.000000000453838C7.029418950349282,3.000000000453838,3.000000005029506,7.029418945768157,3.000000005029506,12.000000000453838c0,4.970581054689319,4.029418945319776,9,9,9,1.438842773441138,0,3.793823242191138-.34625244140625,5-.94659423828125","key":"1"}),
    createElement(Path, {"d":"M21.000000005029506,12.000000000453838v1.500002499998118c0,1.3807104938669-1.119287006140439,2.499997500001882-2.499997499999154,2.499997500001882h-.000004999990779c-1.380710493880542,0-2.499997500010068-1.119287006134982-2.499997500010068-2.499997500001882v-1.500002499998118","key":"2"}),
    createElement(Path, {"d":"M12.000000005029506,3.000000000857654c4.970581054691138-.000000000223736,9.00000000018008,4.029418944910503,9.000000000400178,8.999999999596184","key":"3"})
  );
});

AtCurved.displayName = 'AtCurved';

export default AtCurved;
export { AtCurved };
