'use strict';

const { defineComponent, h } = require('vue');

const DocumentListXCircle = defineComponent({
  name: 'DocumentListXCircle',
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
          h('path', {"d":"M9 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 8"}),
          h('path', {"d":"M6 7L6 7"}),
          h('path', {"d":"M16 7L9 7"}),
          h('path', {"d":"M6 12L6 12"}),
          h('path', {"d":"M13 12L9 12"}),
          h('path', {"d":"M6 17L6 17"}),
          h('path', {"d":"M11 17L9 17"}),
          h('path', {"d":"M18 15L15 18"}),
          h('path', {"d":"M15 15L18 18"}),
          h('path', {"d":"M11 16.5C11 13.461 13.461 11 16.5 11C19.539 11 22 13.461 22 16.5C22 19.539 19.539 22 16.5 22C13.461 22 11 19.539 11 16.5Z"})
        ]
      );
  }
});

module.exports = DocumentListXCircle;
module.exports.DocumentListXCircle = DocumentListXCircle;
module.exports.default = DocumentListXCircle;
