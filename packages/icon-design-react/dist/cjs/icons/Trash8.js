"use strict";

const { forwardRef } = require('react');

const Trash8 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M18.999999990399374,6.000000001481567v14c0,1.10456949966283-.895430500338989,2-2,2H6.999999990399374c-1.104569499659192,0-2-.89543050033717-2-2V6.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999990399374" y1="10.000000001481567" x2="8.999999990399374" y2="18.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999990399374" y1="10.000000001481567" x2="14.999999990399374" y2="18.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999990399374" y1="10.000000001481567" x2="11.999999990399374" y2="18.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.999999990399374" y1="6.000000001481567" x2="20.999999990399374" y2="6.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.999999990399374,6.000000001481567v-2.353921007723329c0-.909104324451619-.736974667830509-1.64607899227849-1.64607899227849-1.64607899227849h-2.707842015441202c-.909104324460714,0-1.646078992280309.736974667826871-1.646078992280309,1.64607899227849v2.353921007723329" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Trash8.displayName = 'Trash8';

module.exports = Trash8;
module.exports.Trash8 = Trash8;
module.exports.default = Trash8;
