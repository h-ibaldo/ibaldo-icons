"use strict";

const { forwardRef } = require('react');

const ThemesColorPalette = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="4.016630450970297" y="13.000000000480213" width="18" height="9" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.792509357220297,13.000000000480213l-11.566101074220569-6.41119384765625c-.483093261719659-.26776123046875-1.091674804690228-.09326171875-1.359436035159888.3897705078125l-1.6748046875,3.02142333984375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.679594318159616,13.000000000480213L14.14187459158984,2.537536621573963c-.292663574209655-.46832275390625-.909545898430224-.61077880859375-1.3779296875-.318115234375l-2.747314453119543,1.7166748046875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="18.516630450970297" cy="16.500000000480213" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ThemesColorPalette.displayName = 'ThemesColorPalette';

module.exports = ThemesColorPalette;
module.exports.ThemesColorPalette = ThemesColorPalette;
module.exports.default = ThemesColorPalette;
