"use strict";

const { forwardRef } = require('react');

const Sun79 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="20.284322394431001 11.999966632738506 21.999933265489744 7.857888853668555 17.85785548640888 6.142144513589301 16.142111146329626 1.999999999998181 12.000033367259675 3.715744340079254 7.857822119151024 1.999999999998181 6.142211248099557 6.142144513589301 2 7.857888853668555 3.715744340081073 11.999966632738506 2 16.142111146327807 6.142211248099557 17.857855486407061 7.857822119151024 21.999999999998181 12.000033367259675 20.284255659917108 16.142111146329626 21.999999999998181 17.85785548640888 17.857855486407061 21.999933265489744 16.142111146327807 20.284322394431001 11.999966632738506" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12" cy="11.999999999998181" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Sun79.displayName = 'Sun79';

module.exports = Sun79;
module.exports.Sun79 = Sun79;
module.exports.default = Sun79;
