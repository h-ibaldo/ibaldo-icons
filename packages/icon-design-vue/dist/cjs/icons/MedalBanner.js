'use strict';

const { defineComponent, h } = require('vue');

const MedalBanner = defineComponent({
  name: 'MedalBanner',
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
          h('path', {"d":"M17 16C17 18.762 14.762 21 12 21C9.238 21 7 18.762 7 16C7 13.238 9.238 11 12 11C14.762 11 17 13.238 17 16Z"}),
          h('path', {"d":"M12 9L4 6L4 2L20 2L20 6Z"})
        ]
      );
  }
});

module.exports = MedalBanner;
module.exports.MedalBanner = MedalBanner;
module.exports.default = MedalBanner;
