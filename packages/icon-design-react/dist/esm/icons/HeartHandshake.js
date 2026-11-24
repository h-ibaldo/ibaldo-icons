import { createElement, forwardRef } from 'react';

const HeartHandshake = forwardRef(function HeartHandshake(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M10.785 19.781L3.508 12.504C1.496 10.492 1.496 7.234 3.508 5.223C5.52 3.215 8.777 3.215 10.785 5.223L12 6.438M15.641 14.93C16.309 15.598 17.395 15.598 18.066 14.93C18.734 14.258 18.734 13.172 18.066 12.504L14.426 8.863L12.406 10.887C11.734 11.555 10.648 11.555 9.977 10.887C9.309 10.215 9.309 9.129 9.977 8.457L13.215 5.223C15.223 3.215 18.48 3.215 20.492 5.223C22.504 7.234 22.504 10.492 20.492 12.504L18.066 14.93M15.641 14.93C16.309 15.598 16.309 16.684 15.641 17.355C14.969 18.023 13.883 18.023 13.215 17.355M13.215 17.355C13.883 18.023 13.883 19.113 13.215 19.781C12.543 20.453 11.457 20.453 10.785 19.781","key":"0"})
  );
});

HeartHandshake.displayName = 'HeartHandshake';

export default HeartHandshake;
export { HeartHandshake };
