'use strict';

const { createElement, forwardRef } = require('react');

const CursorUp = forwardRef(function CursorUp(
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
    createElement('path', {"d":"M10.029410036418994,21.970769791338171l.000008920831533-7.00000465435005-3.542441173831321.797129117430813c-.607253327640137.136645687358396-1.107075817808436-.483184299320783-.844838328239348-1.047684207969724L11.346367853861011,2.441125102119258c.269306021469674-.579715832282091,1.093939550488358-.578394348900474,1.361386192858845.002181634828958l5.655067604770011,12.276080225339683c.260331737699744.565130873870658-.241030995279289,1.183223185149473-.847712223079725,1.045080483248967l-3.485681550320805-.793697654198695-.000008920838809,7.00000465435005-4.000008920831533-.00000465435005Z","key":"0"})
  );
});

CursorUp.displayName = 'CursorUp';

module.exports = CursorUp;
module.exports.CursorUp = CursorUp;
module.exports.default = CursorUp;
