import { createElement, forwardRef } from 'react';

const PhonePlusOne = forwardRef(function PhonePlusOne(
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
    createElement('path', {"d":"M7.637 18.477L5.531 16.371C4.094 14.934 3.008 13.18 2.363 11.246C1.809 9.586 2.012 7.766 2.91 6.262L3.688 4.973C4.047 4.367 4.699 4 5.402 4L5.977 4C6.645 4 7.27 4.336 7.641 4.891L9.492 7.668C10.16 8.672 9.801 10.031 8.723 10.566L7.047 11.406L7.406 12.129C8.375 14.063 9.945 15.633 11.879 16.602L12.602 16.961L13.441 15.285C13.977 14.207 15.336 13.848 16.34 14.516L19.117 16.367C19.672 16.738 20.008 17.363 20.008 18.031L20.008 18.605C20.008 19.309 19.641 19.961 19.035 20.32L17.746 21.098C16.242 21.996 14.422 22.199 12.762 21.645C10.828 21 9.074 19.914 7.637 18.477Z","key":"0"}),
    createElement('path', {"d":"M20 4L22 2L22 11","key":"1"}),
    createElement('path', {"d":"M15 4L15 9","key":"2"}),
    createElement('path', {"d":"M17.5 6.5L12.5 6.5","key":"3"})
  );
});

PhonePlusOne.displayName = 'PhonePlusOne';

export default PhonePlusOne;
export { PhonePlusOne };
