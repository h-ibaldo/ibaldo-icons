'use strict';

const { defineComponent, h } = require('vue');

const PaperclipMinus = defineComponent({
  name: 'PaperclipMinus',
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
          h('path', {"d":"M16 8L10 14C9.172 14.828 9.172 16.172 10 16.996L10.004 17C10.828 17.828 12.172 17.828 13 17L20.758 9.242C22.414 7.586 22.414 4.898 20.758 3.242C19.102 1.586 16.414 1.586 14.758 3.242L6.863 11.137C4.379 13.621 4.379 17.648 6.863 20.133L6.867 20.137C9.352 22.621 13.379 22.621 15.863 20.137L22 14"}),
          h('path', {"d":"M3 4L8 4"})
        ]
      );
  }
});

module.exports = PaperclipMinus;
module.exports.PaperclipMinus = PaperclipMinus;
module.exports.default = PaperclipMinus;
