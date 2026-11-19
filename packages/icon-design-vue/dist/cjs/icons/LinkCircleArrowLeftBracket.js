'use strict';

const { defineComponent, h } = require('vue');

const LinkCircleArrowLeftBracket = defineComponent({
  name: 'LinkCircleArrowLeftBracket',
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
          h('path', {"d":"M14 12L10 12"}),
          h('path', {"d":"M14 15L15 15C16.656 15 18 13.656 18 12C18 10.344 16.656 9 15 9L14 9"}),
          h('path', {"d":"M10 9L9 9C7.344 9 6 10.344 6 12C6 13.656 7.344 15 9 15L10 15"}),
          h('path', {"d":"M18 18L16 20L18 22"}),
          h('path', {"d":"M22 20L16 20"}),
          h('path', {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 13.047 21.84 14.055 21.539 15"})
        ]
      );
  }
});

module.exports = LinkCircleArrowLeftBracket;
module.exports.LinkCircleArrowLeftBracket = LinkCircleArrowLeftBracket;
module.exports.default = LinkCircleArrowLeftBracket;
