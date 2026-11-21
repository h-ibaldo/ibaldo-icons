import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const HeadphonesTilted = forwardRef(function HeadphonesTilted(
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
    createElement(Path, {"d":"M3.094 12.66C3.957 12.352 4.91 12.789 5.223 13.641L7.496 19.801C7.813 20.652 7.367 21.59 6.504 21.902C5.641 22.211 4.688 21.773 4.375 20.922L2.102 14.762C1.785 13.91 2.23 12.973 3.094 12.66Z","key":"0"}),
    createElement(Path, {"d":"M20.906 12.66C21.77 12.973 22.215 13.91 21.898 14.762L19.625 20.922C19.313 21.773 18.359 22.211 17.496 21.902C16.633 21.59 16.188 20.652 16.504 19.801L18.777 13.641C19.09 12.789 20.043 12.352 20.906 12.66Z","key":"1"}),
    createElement(Path, {"d":"M2.672 12.887C2.586 12.379 2.539 11.859 2.539 11.328C2.539 6.176 6.777 2 12 2C17.223 2 21.461 6.176 21.461 11.328C21.461 11.859 21.414 12.379 21.328 12.887","key":"2"}),
    createElement(Path, {"d":"M18.434 4.488L17.324 6.125C16.988 6.625 16.277 6.73 15.73 6.367C14.668 5.652 13.383 5.238 12 5.238C10.617 5.238 9.332 5.652 8.27 6.367C7.723 6.73 7.012 6.625 6.676 6.125L5.566 4.488","key":"3"})
  );
});

HeadphonesTilted.displayName = 'HeadphonesTilted';

export default HeadphonesTilted;
export { HeadphonesTilted };
