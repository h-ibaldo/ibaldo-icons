'use strict';

const { defineComponent, h } = require('vue');

const DocumentListCurl = defineComponent({
  name: 'DocumentListCurl',
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
          h('path', {"d":"M18 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L15.172 22C15.703 22 16.211 21.789 16.586 21.414L19.414 18.586C19.789 18.211 20 17.703 20 17.172L20 4C20 2.895 19.105 2 18 2Z"}),
          h('path', {"d":"M15 22L15 17L20 17"}),
          h('path', {"d":"M11 6L16 6"}),
          h('path', {"d":"M8 6L8 6"}),
          h('path', {"d":"M11 10L16 10"}),
          h('path', {"d":"M8 10L8 10"}),
          h('path', {"d":"M11 14L16 14"}),
          h('path', {"d":"M8 14L8 14"})
        ]
      );
  }
});

module.exports = DocumentListCurl;
module.exports.DocumentListCurl = DocumentListCurl;
module.exports.default = DocumentListCurl;
