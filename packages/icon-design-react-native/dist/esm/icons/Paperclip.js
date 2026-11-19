import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Paperclip = forwardRef(function Paperclip(
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
    createElement(Path, {"d":"M14 8L8 14C7.172 14.828 7.172 16.172 8 16.996L8.004 17C8.828 17.828 10.172 17.828 11 17L18.758 9.242C20.414 7.586 20.414 4.898 18.758 3.242C17.102 1.586 14.414 1.586 12.758 3.242L4.863 11.137C2.379 13.621 2.379 17.648 4.863 20.133L4.867 20.137C7.352 22.621 11.379 22.621 13.863 20.137L20 14","key":"0"})
  );
});

Paperclip.displayName = 'Paperclip';

export default Paperclip;
export { Paperclip };
