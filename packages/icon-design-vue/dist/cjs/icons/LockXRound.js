'use strict';

const { defineComponent, h } = require('vue');

const LockXRound = defineComponent({
  name: 'LockXRound',
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
          h('path', {"d":"M6.974731457399685,10v-3c0-2.761420987731981,2.238574012269964-5,4.999994999990122-5l.000010000000657.000004999998055c2.761420987739257,0,4.999995000009221,2.238574012269964,4.999995000009221,4.999995000001945v3"}),
          h('circle', {"cx":"11.974731457399685","cy":"15","r":"7.000000000000001"}),
          h('line', {"x1":"9.974731457529742","y1":"17","x2":"13.974731457250527","y2":"12.999999995154212"}),
          h('line', {"x1":"9.974731457399685","y1":"12.999999995328835","x2":"13.974731457399685","y2":"16.999999999818101"})
        ]
      );
  }
});

module.exports = LockXRound;
module.exports.LockXRound = LockXRound;
module.exports.default = LockXRound;
