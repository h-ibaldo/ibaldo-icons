import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const AddressBookHooks = forwardRef(function AddressBookHooks(
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
    createElement(Line, {"x1":"4","y1":"11.999999999998181","x2":"4","y2":"10.000003215009201","key":"0"}),
    createElement(Line, {"x1":"4","y1":"16.999999999998181","x2":"4","y2":"15.000002978638804","key":"1"}),
    createElement(Path, {"d":"M4,6.999999999998181v-3c0-.552284749830505.475697453301109-1,1.062488478890373-1h15.874999598969225c.586814468839293,0,1.062511922140402.447715250169495,1.062511922140402,1v16c0,.552284749830505-.475697453301109,1-1.062511922140402,1H5.062488478890373c-.586791025589264,0-1.062488478890373-.447715250169495-1.062488478890373-1","key":"2"}),
    createElement(Line, {"x1":"2","y1":"6.999999999998181","x2":"5","y2":"6.999999999998181","key":"3"}),
    createElement(Line, {"x1":"2","y1":"11.999999999998181","x2":"5","y2":"11.999999999998181","key":"4"}),
    createElement(Line, {"x1":"2","y1":"16.999999999998181","x2":"5","y2":"16.999999999998181","key":"5"}),
    createElement(Circle, {"cx":"13","cy":"9.999999999998181","r":"3","key":"6"}),
    createElement(Path, {"d":"M17,16.999999999998181v-.000003999999535c0-2.209136777590174-1.790859209821065-3.999996000000465-3.999996000000465-3.999996000000465h-.00000799999907c-2.2091367901794,0-3.999996000000465,1.79085922241029-3.999996000000465,3.999996000000465v.000003999999535","key":"7"})
  );
});

AddressBookHooks.displayName = 'AddressBookHooks';

export default AddressBookHooks;
export { AddressBookHooks };
