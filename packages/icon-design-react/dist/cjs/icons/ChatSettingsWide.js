'use strict';

const { createElement, forwardRef } = require('react');

const ChatSettingsWide = forwardRef(function ChatSettingsWide(
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
    createElement('path', {"d":"M18.52 2L13.324 2L10.727 6.5L13.324 11L18.52 11L21.121 6.5Z","key":"0"}),
    createElement('path', {"d":"M16.922 6.5C16.922 5.945 16.477 5.5 15.922 5.5C15.371 5.5 14.922 5.945 14.922 6.5C14.922 7.055 15.371 7.5 15.922 7.5C16.477 7.5 16.922 7.055 16.922 6.5Z","key":"1"}),
    createElement('path', {"d":"M8 3.078C4.609 3.566 2 6.477 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C17.789 17 20.191 15.363 21.316 13","key":"2"})
  );
});

ChatSettingsWide.displayName = 'ChatSettingsWide';

module.exports = ChatSettingsWide;
module.exports.ChatSettingsWide = ChatSettingsWide;
module.exports.default = ChatSettingsWide;
