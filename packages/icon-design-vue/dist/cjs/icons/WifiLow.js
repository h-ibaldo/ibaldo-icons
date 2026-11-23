'use strict';

const { defineComponent, h } = require('vue');

const WifiLow = defineComponent({
  name: 'WifiLow',
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
          h('path', {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926"}),
          h('path', {"d":"M12 20L12 20"})
        ]
      );
  }
});

module.exports = WifiLow;
module.exports.WifiLow = WifiLow;
module.exports.default = WifiLow;
