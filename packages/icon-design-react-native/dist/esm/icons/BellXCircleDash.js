import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const BellXCircleDash = forwardRef(function BellXCircleDash(
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
    createElement(Line, {"x1":"18.000000004469257","y1":"17.000000003885361","x2":"2.000000004469257","y2":"17.000000003885361","key":"0"}),
    createElement(Line, {"x1":"8.000000004469257","y1":"21.000000003885361","x2":"12.000000004469257","y2":"21.000000003885361","key":"1"}),
    createElement(Circle, {"cx":"16.50000000688442","cy":"7.50000000145792","r":"5.499999997576424","key":"2"}),
    createElement(Path, {"d":"M12.615722660719257,3.606445316385361c-.791442871088293-.384521484367724-1.676635742200233-.6064453125-2.61572265625-.6064453125-3.313720703128638,0-6,2.686279296882276-6,6v8","key":"3"}),
    createElement(Line, {"x1":"16.000000004469257","y1":"17.000000003885361","x2":"16.000000004469257","y2":"12.974853519517637","key":"4"}),
    createElement(Line, {"x1":"18.000000009309588","y1":"5.999999999035936","x2":"15.000000009309588","y2":"8.999999999035936","key":"5"}),
    createElement(Line, {"x1":"15.000000009380528","y1":"5.999999998966814","x2":"18.000000009249561","y2":"8.999999999105057","key":"6"})
  );
});

BellXCircleDash.displayName = 'BellXCircleDash';

export default BellXCircleDash;
export { BellXCircleDash };
