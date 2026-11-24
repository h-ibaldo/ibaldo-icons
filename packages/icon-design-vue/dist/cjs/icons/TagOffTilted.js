'use strict';

const { defineComponent, h } = require('vue');

const TagOffTilted = defineComponent({
  name: 'TagOffTilted',
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
          h('path', {"d":"M15.5 9C15.777 9 16 8.777 16 8.5C16 8.223 15.777 8 15.5 8C15.223 8 15 8.223 15 8.5C15 8.777 15.223 9 15.5 9Z"}),
          h('path', {"d":"M5 6L18 19"}),
          h('path', {"d":"M17.5 13.5L19.707 11.293C19.895 11.105 20 10.852 20 10.586L20 5C20 4.449 19.551 4 19 4L13.414 4C13.148 4 12.895 4.105 12.707 4.293L10.5 6.5"}),
          h('path', {"d":"M8 9L3.707 13.293C3.316 13.684 3.316 14.316 3.707 14.707L9.293 20.293C9.684 20.684 10.316 20.684 10.707 20.293L15 16"})
        ]
      );
  }
});

module.exports = TagOffTilted;
module.exports.TagOffTilted = TagOffTilted;
module.exports.default = TagOffTilted;
