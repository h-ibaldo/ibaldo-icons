'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownLeftCircleOut = defineComponent({
  name: 'ArrowDownLeftCircleOut',
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
          h('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12"}),
          h('path', {"d":"M2 17L2 22L7 22"}),
          h('path', {"d":"M2 22L11.5 12.5"})
        ]
      );
  }
});

module.exports = ArrowDownLeftCircleOut;
module.exports.ArrowDownLeftCircleOut = ArrowDownLeftCircleOut;
module.exports.default = ArrowDownLeftCircleOut;
