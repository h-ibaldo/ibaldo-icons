'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const MailboxFlagWaving = forwardRef(function MailboxFlagWaving(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Polyline, {"points":"15.945392090279711 11.999999999998181 15.945392090459791 1.999999999998181 21.94539209011964 2.000000000087311 20.945392090279711 4.999999999998181 21.945392090079622 7.999999999998181 15.945392090409769 7.999999999909051","key":"0"}),
    createElement(Path, {"d":"M6.445387587018614,7.000000000100727h.000008995269688c2.483615139834249,0,4.499995523969013,2.016380384134765,4.499995523969013,4.499995523969012v10.500004475928442H1.945392094430588v-10.500004507309427c0-2.48361512251461,2.016380370073416-4.499995492588027,4.499995492588027-4.499995492588027Z","key":"1"}),
    createElement(Line, {"x1":"12.945392090279711","y1":"6.999999999998181","x2":"6.445392090279711","y2":"6.999999999998181","key":"2"}),
    createElement(Path, {"d":"M10.945392090279711,21.999999999998181h11v-10.5c0-.171264648439319-.03173828125-.333679199220569-.050415039059772-.5","key":"3"})
  );
});

MailboxFlagWaving.displayName = 'MailboxFlagWaving';

module.exports = MailboxFlagWaving;
module.exports.MailboxFlagWaving = MailboxFlagWaving;
module.exports.default = MailboxFlagWaving;
