'use strict';

const { defineComponent, h } = require('vue');

const ImagePaperclipCurl = defineComponent({
  name: 'ImagePaperclipCurl',
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
          h('path', {"d":"M7 11L6 11C3.789 11 2 9.211 2 7C2 4.789 3.789 3 6 3L14 3C15.105 3 16 3.895 16 5C16 6.105 15.105 7 14 7L8 7"}),
          h('path', {"d":"M22 19.949C22 21.082 21.082 22 19.949 22"}),
          h('path', {"d":"M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z"}),
          h('path', {"d":"M16 22C16 18.688 18.688 16 22 16"}),
          h('path', {"d":"M15 15L15 15"})
        ]
      );
  }
});

module.exports = ImagePaperclipCurl;
module.exports.ImagePaperclipCurl = ImagePaperclipCurl;
module.exports.default = ImagePaperclipCurl;
