'use strict';

const { defineComponent, h } = require('vue');

const PlugCable = defineComponent({
  name: 'PlugCable',
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
          h('path', {"d":"M4 2L4 5"}),
          h('path', {"d":"M20 22L20 19"}),
          h('path', {"d":"M8 2L8 5"}),
          h('path', {"d":"M16 22L16 19"}),
          h('path', {"d":"M2 5L10 5L10 7C10 8.105 9.105 9 8 9L4 9C2.895 9 2 8.105 2 7Z"}),
          h('path', {"d":"M22 19L14 19L14 17C14 15.895 14.895 15 16 15L20 15C21.105 15 22 15.895 22 17Z"}),
          h('path', {"d":"M6 9L6 15.156C6 17.23 8.762 17.934 9.754 16.113L14.246 7.887C15.238 6.066 18 6.77 18 8.844L18 15"})
        ]
      );
  }
});

module.exports = PlugCable;
module.exports.PlugCable = PlugCable;
module.exports.default = PlugCable;
