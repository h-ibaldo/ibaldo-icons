import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const DoorOpenX = forwardRef(function DoorOpenX(
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
    createElement(Line, {"x1":"16.974731450043691","y1":"11.731182180869837","x2":"20.974731450043691","y2":"7.731182180869837","key":"0"}),
    createElement(Line, {"x1":"20.974731450043691","y1":"11.731182180869837","x2":"16.974731450043691","y2":"7.731182180869837","key":"1"}),
    createElement(Path, {"d":"M18.974731450043691,15.731182180869837v1.268817819611286c0,.552284749828686-.447715250166766,1-1,1h-6","key":"2"}),
    createElement(Path, {"d":"M2.974731450043691,18.000000000481123V3.000000000479304c0-.552284749830505.447715250171314-1,1-1h14c.552284749833234,0,1,.447715250169495,1,1v.731182180390533","key":"3"}),
    createElement(Path, {"d":"M2.974731450043691,18.000000000481123l8.296930766973674,3.68752478532133c.330643698467611.146952754875201.703069233026326-.095076577726104.703069233026326-.456905774311053V6.324936545025594c0-.197594358243805-.116366760470555-.376655104755628-.296930766972764-.456905774311053L3.413085942231191,2.194824219231123","key":"4"})
  );
});

DoorOpenX.displayName = 'DoorOpenX';

export default DoorOpenX;
export { DoorOpenX };
