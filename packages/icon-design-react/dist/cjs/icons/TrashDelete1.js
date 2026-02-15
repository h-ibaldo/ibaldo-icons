"use strict";

const { forwardRef } = require('react');

const TrashDelete1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="4.0252685457599" y="6.000000001481567" width="16" height="3" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.0252685457599,9.000000001481567v11c0,1.104569499661011-.895430500338989,2-2,2h-8c-1.104569499659192,0-2-.895430500338989-2-2v-11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.0252685457599" y1="13.000000001481567" x2="10.0252685457599" y2="18.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.0252685457599" y1="13.000000001481567" x2="14.0252685457599" y2="18.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.0252685457599,6.000000001481567v-2.353921007723329c0-.909104324451619-.736974667830509-1.64607899227849-1.646078992280309-1.64607899227849h-2.707842015450296c-.9091043244498,0-1.646078992269395.736974667826871-1.646078992269395,1.64607899227849v2.353921007723329" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TrashDelete1.displayName = 'TrashDelete1';

module.exports = TrashDelete1;
module.exports.TrashDelete1 = TrashDelete1;
module.exports.default = TrashDelete1;
