'use strict';

const { defineComponent, h } = require('vue');

const OptionsCheckX = defineComponent({
  name: 'OptionsCheckX',
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
          h('path', {"d":"M11 16.5C11 19.539 13.461 22 16.5 22C19.539 22 22 19.539 22 16.5C22 13.461 19.539 11 16.5 11C13.461 11 11 13.461 11 16.5Z"}),
          h('path', {"d":"M15 15L18 18"}),
          h('path', {"d":"M18 15L15 18"}),
          h('path', {"d":"M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z"}),
          h('path', {"d":"M5.5 7L6.5 8L8.5 6"})
        ]
      );
  }
});

module.exports = OptionsCheckX;
module.exports.OptionsCheckX = OptionsCheckX;
module.exports.default = OptionsCheckX;
