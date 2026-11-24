'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpCircleSegmented = defineComponent({
  name: 'ArrowUpCircleSegmented',
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
          h('path', {"d":"M9 11L12 8L15 11"}),
          h('path', {"d":"M12 16L12 8"}),
          h('path', {"d":"M19 19.137C20.852 17.32 22 14.797 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 14.797 3.148 17.32 5 19.137"}),
          h('path', {"d":"M8 21.16C9.227 21.699 10.578 22 12 22C13.422 22 14.773 21.699 16 21.16"})
        ]
      );
  }
});

module.exports = ArrowUpCircleSegmented;
module.exports.ArrowUpCircleSegmented = ArrowUpCircleSegmented;
module.exports.default = ArrowUpCircleSegmented;
