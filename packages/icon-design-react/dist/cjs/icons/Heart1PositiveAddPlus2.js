"use strict";

const { forwardRef } = require('react');

const Heart1PositiveAddPlus2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="14.974731449499814" y1="18.000000000480213" x2="20.974731449499814" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731449499814" y1="15.000000000480213" x2="17.974731449499814" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.832946781530154,12.000000000480213c1.491271972659888-1.94085693359375,1.368957519530341-4.72259521484375-.408447265620453-6.500000000000909-1.932983398439319-1.932983398435681-5.067016601569776-1.932983398435681-7,0l-1.5,1.500000000000909-1.5-1.500000000000909c-1.932983398439319-1.932983398435681-5.067016601569776-1.932983398435681-7,0-1.932983398439319,1.932983398438409-1.932983398439319,5.067016601563409,0,7.000000000000909l8.5,8.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Heart1PositiveAddPlus2.displayName = 'Heart1PositiveAddPlus2';

module.exports = Heart1PositiveAddPlus2;
module.exports.Heart1PositiveAddPlus2 = Heart1PositiveAddPlus2;
module.exports.default = Heart1PositiveAddPlus2;
