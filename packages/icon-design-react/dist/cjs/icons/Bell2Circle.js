"use strict";

const { forwardRef } = require('react');

const Bell2Circle = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.974731449503452" cy="12.000000000480213" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.974731449503452,15.000000000480213v1.000002000000677c0,1.104568395086972-.895429604908713,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000001354c-1.10456839509061,0-1.999997999999323-.895429604912351-1.999997999999323-1.999997999999323v-1.000002000000677" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.974731449503452,12.000000000480213v-2.000003999979526c0-2.209136790203047-1.790859209823793-3.999996000020474-3.999996000015017-3.999996000020474h-.00000799999907c-2.209136790181219,0-3.999995999998646,1.790859209799237-3.999996000015017,3.999995999987732l-.000000000022737,2.000004000012268-.963533202516373,1.445299803770467c-.443036486481105.664554729719384.03335490988502,1.554700196229533.832050294337023,1.554700196229533h8.262965816411452c.798695384450184,0,1.275086780819038-.890145466510148.832050294337023-1.554700196229533l-.963533202517283-1.445299803770467Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bell2Circle.displayName = 'Bell2Circle';

module.exports = Bell2Circle;
module.exports.Bell2Circle = Bell2Circle;
module.exports.default = Bell2Circle;
