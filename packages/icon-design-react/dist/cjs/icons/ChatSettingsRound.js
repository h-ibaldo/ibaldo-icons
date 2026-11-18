'use strict';

const { createElement, forwardRef } = require('react');

const ChatSettingsRound = forwardRef(function ChatSettingsRound(
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
    createElement('path', {"d":"M18.52 2L13.324 2L10.727 6.5L13.324 11L18.52 11L21.117 6.5Z","key":"0"}),
    createElement('path', {"d":"M16.922 6.5C16.922 5.949 16.477 5.5 15.922 5.5C15.371 5.5 14.922 5.949 14.922 6.5C14.922 7.051 15.371 7.5 15.922 7.5C16.477 7.5 16.922 7.051 16.922 6.5Z","key":"1"}),
    createElement('path', {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.184 22 21.449 18.055 21.949 13","key":"2"})
  );
});

ChatSettingsRound.displayName = 'ChatSettingsRound';

module.exports = ChatSettingsRound;
module.exports.ChatSettingsRound = ChatSettingsRound;
module.exports.default = ChatSettingsRound;
