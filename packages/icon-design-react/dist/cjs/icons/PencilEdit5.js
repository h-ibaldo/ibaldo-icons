"use strict";

const { forwardRef } = require('react');

const PencilEdit5 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.121320343560001,4.721825414817431l-1.757359312849076-1.757359312849076c-1.171572875260608-1.171572875251513-3.071067811870307-1.171572875251513-4.242640687120002,0L2,16.085786445528356l.00000000036016,5.99999999963984h5.99999999963984l13.121320343529078-13.121320343199841c1.171572875280617-1.171572875251513,1.171572875291531-3.071067811890316.000000000030923-4.242640687150924Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13" y1="5.085786445528356" x2="19" y2="11.085786445528356" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PencilEdit5.displayName = 'PencilEdit5';

module.exports = PencilEdit5;
module.exports.PencilEdit5 = PencilEdit5;
module.exports.default = PencilEdit5;
