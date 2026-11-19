'use strict';

const { defineComponent, h } = require('vue');

const PaperclipMinusNarrow = defineComponent({
  name: 'PaperclipMinusNarrow',
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
          h('path', {"d":"M3 4L8 4"}),
          h('path', {"d":"M15.965 7.035L9.621 13.379C8.793 14.207 8.793 15.551 9.621 16.379C10.449 17.207 11.793 17.207 12.621 16.379L20.965 8.035C22.344 6.656 22.344 4.414 20.965 3.035C19.586 1.656 17.344 1.656 15.965 3.035L5.449 13.551C3.516 15.484 3.516 18.617 5.449 20.551C7.383 22.484 10.516 22.484 12.449 20.551L20.965 12.035"})
        ]
      );
  }
});

module.exports = PaperclipMinusNarrow;
module.exports.PaperclipMinusNarrow = PaperclipMinusNarrow;
module.exports.default = PaperclipMinusNarrow;
