'use strict';

const { defineComponent, h } = require('vue');

const LinkCircleArrowRightBracket = defineComponent({
  name: 'LinkCircleArrowRightBracket',
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
          h('path', {"d":"M10 12L14 12"}),
          h('path', {"d":"M10 15L9 15C7.344 15 6 13.656 6 12C6 10.344 7.344 9 9 9L10 9"}),
          h('path', {"d":"M14 9L15 9C16.656 9 18 10.344 18 12C18 13.656 16.656 15 15 15L14 15"}),
          h('path', {"d":"M6 18L8 20L6 22"}),
          h('path', {"d":"M2 20L8 20"}),
          h('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15"})
        ]
      );
  }
});

module.exports = LinkCircleArrowRightBracket;
module.exports.LinkCircleArrowRightBracket = LinkCircleArrowRightBracket;
module.exports.default = LinkCircleArrowRightBracket;
