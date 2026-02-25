"use strict";

const { forwardRef } = require('react');

const WindowControlRestoreSquare2 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="9.94946288292158" y="5.998779299507078" width="8" height="8" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.94946288292158,16.998779299507078c0,.552284749828686-.447715250169495,1-1,1h-6c-.552284749830505,0-1-.447715250171314-1-1v-6c0-.552284749832324.447715250169495-1,1-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.94946288292158" y="1.998779299507078" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WindowControlRestoreSquare2.displayName = 'WindowControlRestoreSquare2';

module.exports = WindowControlRestoreSquare2;
module.exports.WindowControlRestoreSquare2 = WindowControlRestoreSquare2;
module.exports.default = WindowControlRestoreSquare2;
