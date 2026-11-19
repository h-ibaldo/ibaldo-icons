'use strict';

const { defineComponent, h } = require('vue');

const AccessibilityNodes = defineComponent({
  name: 'AccessibilityNodes',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('circle', {"cx":"12.025268549329667","cy":"3.997565476096497","r":"2"}),
          h('line', {"x1":"9.025268549329667","y1":"13.997565476048294","x2":"15.025268548970416","y2":"13.997565476048294"}),
          h('line', {"x1":"15.025268548970416","y1":"8.997565476096497","x2":"9.025268549329667","y2":"8.997565476096497"}),
          h('g', {}, [
            h('circle', {"cx":"4.025268548970416","cy":"6.997565476096497","r":"2"}),
            h('circle', {"cx":"6.025268548970416","cy":"19.997565476096497","r":"2"}),
            h('polyline', {"points":"6.916137689599964 18.215766159689338 9.025268548970416 13.997565476096497 9.025268548970416 8.997565476096497 5.879516595849964 7.739264694846497"})
          ]),
          h('g', {}, [
            h('circle', {"cx":"20.025268548969962","cy":"6.997565476030104","r":"2.000000000000227"}),
            h('circle', {"cx":"18.025268549552266","cy":"19.997565476120144","r":"1.999999999999204"}),
            h('polyline', {"points":"17.134399408850186 18.215766159754821 15.025268549279645 13.997565476255659 15.025268549059547 8.997565476255659 18.171020502129977 7.739264694863778"})
          ])
        ]
      );
  }
});

module.exports = AccessibilityNodes;
module.exports.AccessibilityNodes = AccessibilityNodes;
module.exports.default = AccessibilityNodes;
