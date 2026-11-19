'use strict';

const { defineComponent, h } = require('vue');

const FileStamp = defineComponent({
  name: 'FileStamp',
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
          h('path', {"d":"M5 11L5 4C5 2.895 5.895 2 7 2L15.016 2C15.646 2 16.25 2.25 16.696 2.696L20.304 6.304C20.75 6.75 21 7.354 21 7.984L21 20C21 21.105 20.105 22 19 22L19 22"}),
          h('path', {"d":"M15 2L15 7C15 7.552 15.448 8 16 8L21 8"}),
          h('path', {"d":"M4 17L4 18.586C4 19.491 3.64 20.36 3 21L2 22L12.586 22C13.491 22 14.36 21.64 15 21L15 21C15.64 20.36 16 19.491 16 18.586L16 17C16 15.895 15.105 15 14 15L6 15C4.895 15 4 15.895 4 17Z"}),
          h('path', {"d":"M10 15L9.064 10.321C9.023 10.113 9.052 9.897 9.146 9.707L9.146 9.707C9.498 9.004 10.502 9.004 10.854 9.707L10.854 9.707C10.948 9.897 10.977 10.113 10.936 10.321L10 15Z"})
        ]
      );
  }
});

module.exports = FileStamp;
module.exports.FileStamp = FileStamp;
module.exports.default = FileStamp;
