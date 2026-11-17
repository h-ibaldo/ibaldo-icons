"use strict";

const { forwardRef } = require('react');

const BookmarkThree = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M13.000000026693669,2.999999999998181h-7c-.552284749828686,0-1,.447715250169495-1,1v18l7-4,7,4v-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.000000026693669,1.999999999998181h4.000000000000909l-2.000000000000909,3,.843602306435059.421801153219349c.70871690353124.354358451761073,1.15639769356585,1.078721186149778,1.15639769356585,1.871090772700882v.000001999999768c0,.452752415530995-.179855196775861.886961270860411-.499999499998921,1.207105574079833l-.000001000000339.000001000000339c-.32014430322306.320144303219422-.7543531585452.499999499999831-1.207105574080742.499999499999831h-.000001999999768c-.827824797357607,0-1.62174404623147-.32885212031033-2.207104574079494-.914212648160174l-.085787351841645-.085787351839826" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookmarkThree.displayName = 'BookmarkThree';

module.exports = BookmarkThree;
module.exports.BookmarkThree = BookmarkThree;
module.exports.default = BookmarkThree;
