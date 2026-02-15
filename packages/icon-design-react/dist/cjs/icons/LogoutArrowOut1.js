"use strict";

const { forwardRef } = require('react');

const LogoutArrowOut1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="18.974731450043691 9.000000000481123 21.974731450047329 12.000000000481123 18.974731450043691 15.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.974731450043691" y1="12.000000000481123" x2="21.974731450047329" y2="12.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.974731450043691,17.000000000481123v4c0,.552284749828686-.447715250166766,1-1,1H2.974731450043691c-.552284749828686,0-1-.447715250171314-1-1V3.000000000481123c0-.552284749832324.447715250171314-1,1-1h11c.552284749833234,0,1,.447715250167676,1,1v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LogoutArrowOut1.displayName = 'LogoutArrowOut1';

module.exports = LogoutArrowOut1;
module.exports.LogoutArrowOut1 = LogoutArrowOut1;
module.exports.default = LogoutArrowOut1;
