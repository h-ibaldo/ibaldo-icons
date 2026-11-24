'use strict';

const { createElement, forwardRef } = require('react');

const MobileChat = forwardRef(function MobileChat(
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
    createElement('path', {"d":"M19,13.998779303362426h-5l-3,2v-2h-2c-1.104569499659192,0-2-.895430500338989-2-2v-1c0-1.104569499661011.895430500340808-2,2-2h10c1.104569499670106,0,2,.895430500338989,2,2v1c0,1.104569499661011-.895430500329894,2-2,2Z","key":"0"}),
    createElement('path', {"d":"M17,16.998779303362426v3c0,1.104569499661011-.895430500329894,2-2,2H5c-1.104569499659192,0-2-.895430500338989-2-2V3.998779303362426c0-1.104569499661011.895430500340808-2,2-2h10c1.104569499670106,0,2,.895430500338989,2,2v5","key":"1"}),
    createElement('line', {"x1":"3","y1":"4.998779303362426","x2":"17","y2":"4.998779303362426","key":"2"}),
    createElement('line', {"x1":"3","y1":"18.998779303362426","x2":"17","y2":"18.998779303362426","key":"3"})
  );
});

MobileChat.displayName = 'MobileChat';

module.exports = MobileChat;
module.exports.MobileChat = MobileChat;
module.exports.default = MobileChat;
