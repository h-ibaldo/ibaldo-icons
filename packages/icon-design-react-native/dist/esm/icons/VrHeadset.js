import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline, Rect } from 'react-native-svg';

const VrHeadset = forwardRef(function VrHeadset(
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
    createElement(Rect, {"x":"2.025268549509747","y":"8.998782739598028","width":"20","height":"11","rx":"4","ry":"4","key":"0"}),
    createElement(Path, {"d":"M18.469848627640204,9.043582544285528c-1.335693359380457-2.01861572265625-3.4267578125-3.4412841796875-5.829833984380457-3.921875l-.61474609375-.1229248046875-.61474609375.1229248046875c-2.403076171869543.4805908203125-4.494140625,1.90325927734375-5.829833984369543,3.921875","key":"1"}),
    createElement(Polyline, {"points":"13.025268549509747 5.218997583348028 13.025268549509747 3.998782739598028 11.025268549509747 3.998782739598028 11.025268549509747 5.218997583348028","key":"2"}),
    createElement(Rect, {"x":"7.025268549509747","y":"13.998782739598028","width":"2","height":"1","key":"3"}),
    createElement(Rect, {"x":"15.025268549509747","y":"13.998782739598028","width":"2","height":"1","key":"4"})
  );
});

VrHeadset.displayName = 'VrHeadset';

export default VrHeadset;
export { VrHeadset };
