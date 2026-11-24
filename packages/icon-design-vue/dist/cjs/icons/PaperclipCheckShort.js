'use strict';

const { defineComponent, h } = require('vue');

const PaperclipCheckShort = defineComponent({
  name: 'PaperclipCheckShort',
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
          h('path', {"d":"M12 14L18.172 7.828C19.277 6.723 19.277 4.934 18.172 3.828C17.066 2.723 15.277 2.723 14.172 3.828L5.449 12.551C3.516 14.484 3.516 17.617 5.449 19.551C7.383 21.484 10.516 21.484 12.449 19.551L20.895 11.105"}),
          h('path', {"d":"M2 4L4 6L8 2"})
        ]
      );
  }
});

module.exports = PaperclipCheckShort;
module.exports.PaperclipCheckShort = PaperclipCheckShort;
module.exports.default = PaperclipCheckShort;
