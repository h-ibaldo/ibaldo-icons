import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatDollarWide = forwardRef(function ChatDollarWide(
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
    createElement(Path, {"d":"M14 7.5L13.688 7.395C12.898 7.133 12.078 7 11.25 7C10.285 7 9.5 7.781 9.5 8.75C9.5 9.719 10.285 10.5 11.25 10.5L12.75 10.5C13.715 10.5 14.5 11.281 14.5 12.25C14.5 13.219 13.715 14 12.75 14C11.922 14 11.102 13.867 10.313 13.605L10 13.5","key":"0"}),
    createElement(Path, {"d":"M12 6L12 7","key":"1"}),
    createElement(Path, {"d":"M12 14L12 15","key":"2"}),
    createElement(Path, {"d":"M14.5 3L9.5 3C5.359 3 2 6.355 2 10.5C2 13.766 4.09 16.531 7 17.563L7 22L11.668 18L14.5 18C18.641 18 22 14.645 22 10.5C22 6.355 18.641 3 14.5 3Z","key":"3"})
  );
});

ChatDollarWide.displayName = 'ChatDollarWide';

export default ChatDollarWide;
export { ChatDollarWide };
