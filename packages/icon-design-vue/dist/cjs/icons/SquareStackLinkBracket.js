'use strict';

const { defineComponent, h } = require('vue');

const SquareStackLinkBracket = defineComponent({
  name: 'SquareStackLinkBracket',
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
          h('path', {"d":"M8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L18 6C19.105 6 20 6.895 20 8L20 12"}),
          h('path', {"d":"M15 19L18 19"}),
          h('path', {"d":"M14.5 22L14 22C12.344 22 11 20.656 11 19C11 17.344 12.344 16 14 16L14.5 16"}),
          h('path', {"d":"M18.5 16L19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22L18.5 22"}),
          h('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L14 2"})
        ]
      );
  }
});

module.exports = SquareStackLinkBracket;
module.exports.SquareStackLinkBracket = SquareStackLinkBracket;
module.exports.default = SquareStackLinkBracket;
