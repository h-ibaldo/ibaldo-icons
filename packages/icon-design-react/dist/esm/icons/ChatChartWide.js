import { createElement, forwardRef } from 'react';

const ChatChartWide = forwardRef(function ChatChartWide(
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
    createElement('path', {"d":"M8 13L8 12","key":"0"}),
    createElement('path', {"d":"M12 13L12 10","key":"1"}),
    createElement('path', {"d":"M16 13L16 8","key":"2"}),
    createElement('path', {"d":"M14.5 3L9.5 3C5.359 3 2 6.355 2 10.5C2 13.766 4.09 16.531 7 17.563L7 22L11.668 18L14.5 18C18.645 18 22 14.645 22 10.5C22 6.355 18.645 3 14.5 3Z","key":"3"})
  );
});

ChatChartWide.displayName = 'ChatChartWide';

export default ChatChartWide;
export { ChatChartWide };
