'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownLeftSlim = defineComponent({
  name: 'ArrowDownLeftSlim',
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
          h('path', {"d":"M10 18L6 18L6 14"}),
          h('path', {"d":"M6 18L18 6"})
        ]
      );
  }
});

module.exports = ArrowDownLeftSlim;
module.exports.ArrowDownLeftSlim = ArrowDownLeftSlim;
module.exports.default = ArrowDownLeftSlim;
