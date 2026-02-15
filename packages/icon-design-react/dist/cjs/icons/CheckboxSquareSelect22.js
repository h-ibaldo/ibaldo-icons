"use strict";

const { forwardRef } = require('react');

const CheckboxSquareSelect22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.025268554611102" y="2.000000000709406" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.025268554611102,12.000000000709406v3c0,1.104569499661011-.895430500351722,2-2,2h-6c-1.104569499671925,0-2-.895430500338989-2-2v-6c0-1.104569499661011.895430500328075-2,2-2h3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="10.025268554611102 11.000000000709406 12.025268554611102 13.000000000709406 16.025268554611102 8.000000000709406" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxSquareSelect22.displayName = 'CheckboxSquareSelect22';

module.exports = CheckboxSquareSelect22;
module.exports.CheckboxSquareSelect22 = CheckboxSquareSelect22;
module.exports.default = CheckboxSquareSelect22;
