'use strict';

const { defineComponent, h } = require('vue');

const ArrowRightCircleSegmented = defineComponent({
  name: 'ArrowRightCircleSegmented',
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
          h('path', {"d":"M13 9L16 12L13 15"}),
          h('path', {"d":"M8 12L16 12"}),
          h('path', {"d":"M4.863 19C6.68 20.852 9.203 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C9.203 2 6.68 3.148 4.863 5"}),
          h('path', {"d":"M2.84 8C2.301 9.227 2 10.578 2 12C2 13.422 2.301 14.773 2.84 16"})
        ]
      );
  }
});

module.exports = ArrowRightCircleSegmented;
module.exports.ArrowRightCircleSegmented = ArrowRightCircleSegmented;
module.exports.default = ArrowRightCircleSegmented;
