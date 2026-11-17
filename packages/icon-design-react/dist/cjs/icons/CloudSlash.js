'use strict';

const { createElement, forwardRef } = require('react');

const CloudSlash = forwardRef(function CloudSlash(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('g', {"key":"0"},
      createElement('circle', {"cx":"12","cy":"16.999999999718057","r":"4","key":"0"}),
      createElement('line', {"x1":"14.828450520830302","y1":"14.171549478876841","x2":"9.171549479159694","y2":"19.828450520548358","key":"1"})),
    createElement('path', {"d":"M19,17.858581542677712c1.722229003899884-.446044921860448,3-1.996826171860448,3-3.858581542959655,0-2.209167480479664-1.790832519530341-4-4-4h-.025207519530341c.014892578120453-.164916992180224.025207519530341-.331176757810681.025207519530341-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699219659,0-3.987365722659888,1.222900390631366-4.897277832040345,3.005187988270336-.034545898429315-.000610351560681-.068054199209655-.005187988270336-.102722167959655-.005187988270336-3.037536621100116,0-5.5,2.462463378909888-5.5,5.5,0,2.136352539069776,1.220458984369543,3.983947753909888,3,4.894775390631366","key":"1"})
  );
});

CloudSlash.displayName = 'CloudSlash';

module.exports = CloudSlash;
module.exports.CloudSlash = CloudSlash;
module.exports.default = CloudSlash;
