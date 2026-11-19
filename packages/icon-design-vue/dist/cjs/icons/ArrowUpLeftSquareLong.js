'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpLeftSquareLong = defineComponent({
  name: 'ArrowUpLeftSquareLong',
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
          h('path', {"d":"M4 22L20 22C21.105 22 22 21.105 22 20L22 4C22 2.895 21.105 2 20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22Z"}),
          h('path', {"d":"M14 7L7 7L7 14"}),
          h('path', {"d":"M17 17L7 7"})
        ]
      );
  }
});

module.exports = ArrowUpLeftSquareLong;
module.exports.ArrowUpLeftSquareLong = ArrowUpLeftSquareLong;
module.exports.default = ArrowUpLeftSquareLong;
