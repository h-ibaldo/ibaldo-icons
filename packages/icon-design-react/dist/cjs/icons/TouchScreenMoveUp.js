"use strict";

const { forwardRef } = require('react');

const TouchScreenMoveUp = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="9.025268549155953 4.998782739599847 12.025268549155953 1.998782739599847 15.025268549155953 4.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268549155953" y1="13.998782739599847" x2="12.025268549155953" y2="1.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.025268549155953,10.808047876318597c1.791625976560681,1.037841796875,3,2.97119140625,3,5.19073486328125,0,3.313720703125-2.686279296880457,6-6,6-3.313720703130457,0-6-2.686279296875-6-6,0-2.21954345703125,1.208374023439319-4.15289306640625,3-5.19073486328125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TouchScreenMoveUp.displayName = 'TouchScreenMoveUp';

module.exports = TouchScreenMoveUp;
module.exports.TouchScreenMoveUp = TouchScreenMoveUp;
module.exports.default = TouchScreenMoveUp;
