'use strict';

const { defineComponent, h } = require('vue');

const PaperclipMinusVertical = defineComponent({
  name: 'PaperclipMinusVertical',
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
          h('path', {"d":"M15 9L15 16C15 19.313 12.313 22 9 22C5.688 22 3 19.313 3 16L3 6C3 3.789 4.789 2 7 2C9.211 2 11 3.789 11 6L11 15C11 16.105 10.105 17 9 17C7.895 17 7 16.105 7 15L7 9"}),
          h('path', {"d":"M21 4L16 4"})
        ]
      );
  }
});

module.exports = PaperclipMinusVertical;
module.exports.PaperclipMinusVertical = PaperclipMinusVertical;
module.exports.default = PaperclipMinusVertical;
