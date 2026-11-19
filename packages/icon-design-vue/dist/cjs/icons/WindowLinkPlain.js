'use strict';

const { defineComponent, h } = require('vue');

const WindowLinkPlain = defineComponent({
  name: 'WindowLinkPlain',
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
          h('path', {"d":"M14 19L18 19"}),
          h('path', {"d":"M14 22L13 22C11.344 22 10 20.656 10 19C10 17.344 11.344 16 13 16L14 16"}),
          h('path', {"d":"M18 16L19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22L18 22"}),
          h('path', {"d":"M7 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 13"}),
          h('path', {"d":"M2 8L22 8"})
        ]
      );
  }
});

module.exports = WindowLinkPlain;
module.exports.WindowLinkPlain = WindowLinkPlain;
module.exports.default = WindowLinkPlain;
