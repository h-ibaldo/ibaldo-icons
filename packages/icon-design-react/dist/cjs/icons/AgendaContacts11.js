"use strict";

const { forwardRef } = require('react');

const AgendaContacts11 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="9.999999999998181" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16,16.999999999998181v-.000003999999535c0-2.209136777590174-1.790859209819246-3.999996000000465-3.999996000000465-3.999996000000465h-.00000799999907c-2.209136790190314,0-3.999996000000465,1.79085922241029-3.999996000000465,3.999996000000465v.000003999999535" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="3" y="1.999999999998181" width="18" height="20" rx="1.897366596100255" ry="1.897366596100255" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AgendaContacts11.displayName = 'AgendaContacts11';

module.exports = AgendaContacts11;
module.exports.AgendaContacts11 = AgendaContacts11;
module.exports.default = AgendaContacts11;
