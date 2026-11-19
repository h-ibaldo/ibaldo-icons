'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpRightCircleLarge = defineComponent({
  name: 'ArrowUpRightCircleLarge',
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
          h('path', {"d":"M19.07 19.07C22.977 15.168 22.977 8.836 19.07 4.93C15.168 1.023 8.836 1.023 4.93 4.93C1.023 8.836 1.023 15.168 4.93 19.07C8.836 22.977 15.168 22.977 19.07 19.07Z"}),
          h('path', {"d":"M16 15L16 8L9 8"}),
          h('path', {"d":"M9 15L16 8"})
        ]
      );
  }
});

module.exports = ArrowUpRightCircleLarge;
module.exports.ArrowUpRightCircleLarge = ArrowUpRightCircleLarge;
module.exports.default = ArrowUpRightCircleLarge;
