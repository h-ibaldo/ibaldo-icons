'use strict';

const { defineComponent, h } = require('vue');

const DocumentListHeart = defineComponent({
  name: 'DocumentListHeart',
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
          h('path', {"d":"M10 20L5 20C3.895 20 3 19.105 3 18L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 11"}),
          h('path', {"d":"M7 7L7 7"}),
          h('path', {"d":"M17 7L10 7"}),
          h('path', {"d":"M7 11L7 11"}),
          h('path', {"d":"M17 11L10 11"}),
          h('path', {"d":"M7 15L7 15"}),
          h('path', {"d":"M11 15L10 15"}),
          h('path', {"d":"M17.293 21.707L14.5 18.914C13.672 18.086 13.672 16.742 14.5 15.914C15.328 15.086 16.672 15.086 17.5 15.914L18 16.414L18.5 15.914C19.328 15.086 20.672 15.086 21.5 15.914C22.328 16.742 22.328 18.086 21.5 18.914L18.707 21.707C18.316 22.098 17.684 22.098 17.293 21.707Z"})
        ]
      );
  }
});

module.exports = DocumentListHeart;
module.exports.DocumentListHeart = DocumentListHeart;
module.exports.default = DocumentListHeart;
