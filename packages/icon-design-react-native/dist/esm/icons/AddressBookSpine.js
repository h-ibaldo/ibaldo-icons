import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';

const AddressBookSpine = forwardRef(function AddressBookSpine(
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
    createElement(Circle, {"cx":"14","cy":"9.999999999998181","r":"3","key":"0"}),
    createElement(Path, {"d":"M18,16.999999999998181v-.000003999999535c0-2.209136777590174-1.790859209819246-3.999996000000465-3.999996000000465-3.999996000000465h-.00000799999907c-2.209136790181219,0-3.999996000000465,1.79085922241029-3.999996000000465,3.999996000000465v.000003999999535","key":"1"}),
    createElement(Rect, {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"2","ry":"2","key":"2"}),
    createElement(Line, {"x1":"6","y1":"1.999999999998181","x2":"6","y2":"21.999999999998181","key":"3"})
  );
});

AddressBookSpine.displayName = 'AddressBookSpine';

export default AddressBookSpine;
export { AddressBookSpine };
