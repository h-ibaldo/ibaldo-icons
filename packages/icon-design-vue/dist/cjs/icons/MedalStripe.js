'use strict';

const { defineComponent, h } = require('vue');

const MedalStripe = defineComponent({
  name: 'MedalStripe',
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
          h('path', {"d":"M16 17C16 19.211 14.211 21 12 21C9.789 21 8 19.211 8 17C8 14.789 9.789 13 12 13C14.211 13 16 14.789 16 17Z"}),
          h('path', {"d":"M12 12L7 9L7 3L17 3L17 9Z"}),
          h('path', {"d":"M12 3L12 12"})
        ]
      );
  }
});

module.exports = MedalStripe;
module.exports.MedalStripe = MedalStripe;
module.exports.default = MedalStripe;
