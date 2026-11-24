import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const TrashNarrow = forwardRef(function TrashNarrow(
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
    createElement(Path, {"d":"M18.0252685457599,6.000000001483386v13.999999999998181c0,1.104569499661011-.895430500338989,2-2,2h-8c-1.104569499670106,0-2-.895430500338989-2-2V6.000000001483386","key":"0"}),
    createElement(Line, {"x1":"10.0252685457599","y1":"10.000000001483386","x2":"10.0252685457599","y2":"18.000000001481567","key":"1"}),
    createElement(Line, {"x1":"14.0252685457599","y1":"10.000000001483386","x2":"14.0252685457599","y2":"18.000000001481567","key":"2"}),
    createElement(Line, {"x1":"4.0252685457599","y1":"6.000000001483386","x2":"20.0252685457599","y2":"6.000000001483386","key":"3"}),
    createElement(Path, {"d":"M15.0252685457599,6.000000001483386v-2.353921007720601c0-.909104324454347-.736974667830509-1.646078992281218-1.646078992280309-1.646078992281218h-2.707842015450296c-.9091043244498,0-1.646078992269395.736974667826871-1.646078992269395,1.646078992281218v2.353921007720601","key":"4"})
  );
});

TrashNarrow.displayName = 'TrashNarrow';

export default TrashNarrow;
export { TrashNarrow };
