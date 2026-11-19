'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpLeftCircleLarge = defineComponent({
  name: 'ArrowUpLeftCircleLarge',
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
          h('path', {"d":"M8 15L8 8L15 8"}),
          h('path', {"d":"M19.07 4.93C22.977 8.832 22.977 15.164 19.07 19.07C15.168 22.977 8.836 22.977 4.93 19.07C1.023 15.164 1.023 8.832 4.93 4.93C8.836 1.023 15.168 1.023 19.07 4.93Z"}),
          h('path', {"d":"M15 15L8 8"})
        ]
      );
  }
});

module.exports = ArrowUpLeftCircleLarge;
module.exports.ArrowUpLeftCircleLarge = ArrowUpLeftCircleLarge;
module.exports.default = ArrowUpLeftCircleLarge;
