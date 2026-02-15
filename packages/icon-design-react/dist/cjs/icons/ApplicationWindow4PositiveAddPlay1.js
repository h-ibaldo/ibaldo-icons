"use strict";

const { forwardRef } = require('react');

const ApplicationWindow4PositiveAddPlay1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M12.025268549803513,21.998779300087335h-7c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779300087335c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.025268549803513" y1="7.998779300087335" x2="22.025268549803513" y2="7.998779300087335" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="16.025268549803513 13.998779300087335 16.025268549803513 21.998779300087335 22.025268549803513 17.998779300087335 16.025268549803513 13.998779300087335" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow4PositiveAddPlay1.displayName = 'ApplicationWindow4PositiveAddPlay1';

module.exports = ApplicationWindow4PositiveAddPlay1;
module.exports.ApplicationWindow4PositiveAddPlay1 = ApplicationWindow4PositiveAddPlay1;
module.exports.default = ApplicationWindow4PositiveAddPlay1;
