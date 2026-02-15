"use strict";

const { forwardRef } = require('react');

const DiagramHierarchy2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.016630450971206" y="2.000000000480213" width="4" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="18.016630450973025" y="9.000000000480213" width="4" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="10.016630450973025" y="2.000000000480213" width="4" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.016630450973025" y="16.000000000480213" width="4" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="10.016630450973025" y="16.000000000480213" width="4" height="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.016630450973025" y1="5.000000000480213" x2="10.016630450973025" y2="5.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.016630450973025" y1="19.000000000480213" x2="10.016630450973025" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.016630450973025,5.000000000480213h5c.552284749829596,0,1,.447715250167676,1,1v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.016630450973025,19.000000000480213h5c.552284749829596,0,1-.447715250171314,1-1v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DiagramHierarchy2.displayName = 'DiagramHierarchy2';

module.exports = DiagramHierarchy2;
module.exports.DiagramHierarchy2 = DiagramHierarchy2;
module.exports.default = DiagramHierarchy2;
