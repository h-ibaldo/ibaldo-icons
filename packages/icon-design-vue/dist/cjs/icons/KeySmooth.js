'use strict';

const { defineComponent, h } = require('vue');

const KeySmooth = defineComponent({
  name: 'KeySmooth',
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
          h('path', {"d":"M14.5,1.999999999998181c-4.14208984375,0-7.5,3.357849121090112-7.5,7.5,0,1.033142089840112.209228515619543,2.017333984369543.587036132809772,2.912963867189319l-5.587036132809772,5.587036132810681v4h4l5.587036132809772-5.587036132810681c.895629882809772.377868652340112,1.879760742190228.587036132810681,2.912963867190228.587036132810681,4.14208984375,0,7.5-3.357849121090112,7.5-7.5s-3.35791015625-7.5-7.5-7.5Z"}),
          h('line', {"x1":"15","y1":"6.999999999998181","x2":"17","y2":"8.999999999998181"})
        ]
      );
  }
});

module.exports = KeySmooth;
module.exports.KeySmooth = KeySmooth;
module.exports.default = KeySmooth;
