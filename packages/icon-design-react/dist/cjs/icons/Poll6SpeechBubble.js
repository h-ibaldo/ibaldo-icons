'use strict';

const { createElement, forwardRef } = require('react');

const Poll6SpeechBubble = forwardRef(function Poll6SpeechBubble(
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
    createElement('line', {"x1":"5.999999999810825","y1":"6.000000000241926","x2":"8.999999999810825","y2":"6.000000000598448","key":"0"}),
    createElement('line', {"x1":"5.999999999810825","y1":"10.000000000241926","x2":"16.999999999810825","y2":"10.000000000598448","key":"1"}),
    createElement('line', {"x1":"5.999999999810825","y1":"14.000000000241926","x2":"12.999999999810825","y2":"14.000000000598448","key":"2"}),
    createElement('path', {"d":"M21.999999999759893,5.000000000620275l-.000000000569344,10.000000000014552c-.000000000110958,1.656854249478783-1.343145750661279,2.999999999901775-3.000000000139153,2.999999999829015l-12.999997031952262-.000000000582077-4.000002968079571,3.999999999938154.000000000771252-17.000000000145519c.000000000080036-1.656854249489697,1.343145750639451-2.999999999930878,3.000000000129148-2.999999999854481l13.999999999970896.000000000625732c1.656854249509706.000000000076398,2.999999999959982,1.343145750666736,2.999999999869033,3.000000000174623Z","key":"3"})
  );
});

Poll6SpeechBubble.displayName = 'Poll6SpeechBubble';

module.exports = Poll6SpeechBubble;
module.exports.Poll6SpeechBubble = Poll6SpeechBubble;
module.exports.default = Poll6SpeechBubble;
