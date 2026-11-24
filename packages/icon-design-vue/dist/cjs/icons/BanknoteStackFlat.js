'use strict';

const { defineComponent, h } = require('vue');

const BanknoteStackFlat = defineComponent({
  name: 'BanknoteStackFlat',
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
          h('path', {"d":"M2 16L22 16L22 2L2 2Z"}),
          h('path', {"d":"M15 9C15 11.211 13.656 13 12 13C10.344 13 9 11.211 9 9C9 6.789 10.344 5 12 5C13.656 5 15 6.789 15 9Z"}),
          h('path', {"d":"M18 2C18 4.211 19.789 6 22 6"}),
          h('path', {"d":"M22 12C19.789 12 18 13.789 18 16"}),
          h('path', {"d":"M6 16C6 13.789 4.211 12 2 12"}),
          h('path', {"d":"M2 6C4.211 6 6 4.211 6 2"}),
          h('path', {"d":"M3 19L21 19"}),
          h('path', {"d":"M4 22L20 22"})
        ]
      );
  }
});

module.exports = BanknoteStackFlat;
module.exports.BanknoteStackFlat = BanknoteStackFlat;
module.exports.default = BanknoteStackFlat;
