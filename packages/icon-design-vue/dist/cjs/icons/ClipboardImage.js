'use strict';

const { defineComponent, h } = require('vue');

const ClipboardImage = defineComponent({
  name: 'ClipboardImage',
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
          h('path', {"d":"M7 22L5 22C3.895 22 3 21.105 3 20L3 6C3 4.895 3.895 4 5 4L8 4"}),
          h('path', {"d":"M16 4L19 4C20.105 4 21 4.895 21 6L21 8"}),
          h('path', {"d":"M14.883 7L9.117 7C8.5 7 8 6.5 8 5.883L8 3.117C8 2.5 8.5 2 9.117 2L14.883 2C15.5 2 16 2.5 16 3.117L16 5.883C16 6.5 15.5 7 14.883 7Z"}),
          h('path', {"d":"M21 19.949C21 21.082 20.082 22 18.949 22"}),
          h('path', {"d":"M18.789 22L12.211 22C10.988 22 10 21.012 10 19.789L10 13.211C10 11.988 10.988 11 12.211 11L18.789 11C20.012 11 21 11.988 21 13.211L21 19.789C21 21.012 20.012 22 18.789 22Z"}),
          h('path', {"d":"M15 22C15 18.688 17.688 16 21 16"}),
          h('path', {"d":"M14 15L14 15"})
        ]
      );
  }
});

module.exports = ClipboardImage;
module.exports.ClipboardImage = ClipboardImage;
module.exports.default = ClipboardImage;
