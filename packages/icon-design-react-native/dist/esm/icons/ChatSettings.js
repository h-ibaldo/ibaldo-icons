import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatSettings = forwardRef(function ChatSettings(
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
    createElement(Path, {"d":"M18.52 2L13.324 2L10.727 6.5L13.324 11L18.52 11L21.117 6.5Z","key":"0"}),
    createElement(Path, {"d":"M16.922 6.5C16.922 5.949 16.477 5.5 15.922 5.5C15.371 5.5 14.922 5.949 14.922 6.5C14.922 7.051 15.371 7.5 15.922 7.5C16.477 7.5 16.922 7.051 16.922 6.5Z","key":"1"}),
    createElement(Path, {"d":"M8 3.672C4.469 4.906 2 7.723 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C16.656 19 20.555 16.449 21.664 13","key":"2"})
  );
});

ChatSettings.displayName = 'ChatSettings';

export default ChatSettings;
export { ChatSettings };
