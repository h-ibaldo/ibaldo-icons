'use strict';

const { createElement, forwardRef } = require('react');

const LightbulbCap = forwardRef(function LightbulbCap(
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
    createElement('path', {"d":"M9,18.046448520708509h6v2c0,1.103830048988002-.896169951012,2-2,2h-2c-1.103830048988,0-2-.896169951011998-2-2v-2h0Z","key":"0"}),
    createElement('path', {"d":"M15,18.046448520708509l.296234160829044-.888670064668986c.443972614770246-1.331869259000086,1.163662323760946-2.547410432791366,2.066975680221731-3.622125458181472,1.020591061549567-1.214245910119644,1.636790158949225-2.778448355629735,1.636790158949225-4.489204477149542,0-4.325019321140644-3.922504564270639-7.733962558799249-8.404112423990227-6.86339370550013-2.738962019158862.532053472519692-4.940401698919231,2.745730684149748-5.464048108200586,5.486312424958669-.419175381848618,2.193817005831079.189465466010006,4.245313115490717,1.425210996800161,5.769687290190632.912274484920999,1.125351158789272,1.69124941921109,2.352375902701169,2.149375795961532,3.726704898741446l.293573739429121.880689091609383","key":"1"})
  );
});

LightbulbCap.displayName = 'LightbulbCap';

module.exports = LightbulbCap;
module.exports.LightbulbCap = LightbulbCap;
module.exports.default = LightbulbCap;
