'use strict';

const { defineComponent, h } = require('vue');

const BoxPlain = defineComponent({
  name: 'BoxPlain',
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
          h('polygon', {"points":"12 1.999999999998181 2 6.999999999998181 2 16.999999999998181 12 21.999999999998181 22 16.999999999998181 22 6.999999999998181 12 1.999999999998181"}),
          h('polyline', {"points":"2 6.999999999998181 12 11.999999999998181 22 6.999999999998181"}),
          h('line', {"x1":"12","y1":"21.999999999998181","x2":"12","y2":"11.999999999998181"})
        ]
      );
  }
});

module.exports = BoxPlain;
module.exports.BoxPlain = BoxPlain;
module.exports.default = BoxPlain;
