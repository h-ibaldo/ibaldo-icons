'use strict';

const { defineComponent, h } = require('vue');

const RssHigh = defineComponent({
  name: 'RssHigh',
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
          h('path', {"d":"M2 20C2 18.895 2.895 18 4 18C5.105 18 6 18.895 6 20C6 21.105 5.105 22 4 22C2.895 22 2 21.105 2 20Z"}),
          h('path', {"d":"M3 12C7.969 12 12 16.031 12 21"}),
          h('path', {"d":"M3 7C10.73 7 17 13.27 17 21"}),
          h('path', {"d":"M3 2C13.492 2 22 10.508 22 21"})
        ]
      );
  }
});

module.exports = RssHigh;
module.exports.RssHigh = RssHigh;
module.exports.default = RssHigh;
