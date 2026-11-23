'use strict';

const { defineComponent, h } = require('vue');

const BanknoteX = defineComponent({
  name: 'BanknoteX',
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
          h('path', {"d":"M15 18L2 18L2 6L22 6L22 13"}),
          h('path', {"d":"M2 14L3 14C4.656 14 6 15.344 6 17L6 18"}),
          h('path', {"d":"M6 6L6 7C6 8.656 4.656 10 3 10L2 10"}),
          h('path', {"d":"M18 6L18 7C18 8.656 19.344 10 21 10L22 10"}),
          h('path', {"d":"M10 12C10 10.344 10.895 9 12 9C13.105 9 14 10.344 14 12C14 13.656 13.105 15 12 15C10.895 15 10 13.656 10 12Z"}),
          h('path', {"d":"M18 16L22 20"}),
          h('path', {"d":"M22 16L18 20"})
        ]
      );
  }
});

module.exports = BanknoteX;
module.exports.BanknoteX = BanknoteX;
module.exports.default = BanknoteX;
