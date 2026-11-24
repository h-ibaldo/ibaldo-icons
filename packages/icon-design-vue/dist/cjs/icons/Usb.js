'use strict';

const { defineComponent, h } = require('vue');

const Usb = defineComponent({
  name: 'Usb',
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
          h('path', {"d":"M10 20C10 18.895 10.895 18 12 18C13.105 18 14 18.895 14 20C14 21.105 13.105 22 12 22C10.895 22 10 21.105 10 20Z"}),
          h('path', {"d":"M12 18L12 6"}),
          h('path', {"d":"M12 2L9 6L15 6Z"}),
          h('path', {"d":"M12 13L19 13L19 10"}),
          h('path', {"d":"M12 16L6 16L6 13"}),
          h('path', {"d":"M18 6L20 6C20.551 6 21 6.449 21 7L21 9C21 9.551 20.551 10 20 10L18 10C17.449 10 17 9.551 17 9L17 7C17 6.449 17.449 6 18 6Z"}),
          h('path', {"d":"M6 9C4.895 9 4 9.895 4 11C4 12.105 4.895 13 6 13C7.105 13 8 12.105 8 11C8 9.895 7.105 9 6 9Z"})
        ]
      );
  }
});

module.exports = Usb;
module.exports.Usb = Usb;
module.exports.default = Usb;
