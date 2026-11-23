'use strict';

const { defineComponent, h } = require('vue');

const DraftingCompass = defineComponent({
  name: 'DraftingCompass',
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
          h('path', {"d":"M9 7C9 5.344 10.344 4 12 4C13.656 4 15 5.344 15 7C15 8.656 13.656 10 12 10C10.344 10 9 8.656 9 7Z"}),
          h('path', {"d":"M12 2L12 4"}),
          h('path', {"d":"M4 22L10.59 9.648"}),
          h('path', {"d":"M13.41 9.648L20 22"}),
          h('path', {"d":"M4 16L20 16"}),
          h('path', {"d":"M12 14L12 18"})
        ]
      );
  }
});

module.exports = DraftingCompass;
module.exports.DraftingCompass = DraftingCompass;
module.exports.default = DraftingCompass;
