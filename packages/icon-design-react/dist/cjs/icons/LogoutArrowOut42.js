"use strict";

const { forwardRef } = require('react');

const LogoutArrowOut42 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="4.974731450043691 15.000000000481123 1.974731450043691 12.000000000481123 4.974731450043691 9.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.974731450043691" y1="12.000000000481123" x2="1.974731450043691" y2="12.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731450043691,6.056394887018541v-3.056394886537419c0-.552284749832324.447715250171314-1,1-1h18c.552284749832324,0,1,.447715250167676,1,1v18c0,.552284749828686-.447715250167676,1-1,1H2.974731450043691c-.552284749828686,0-1-.447715250171314-1-1v-2.943605113462581" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LogoutArrowOut42.displayName = 'LogoutArrowOut42';

module.exports = LogoutArrowOut42;
module.exports.LogoutArrowOut42 = LogoutArrowOut42;
module.exports.default = LogoutArrowOut42;
