'use strict';

const { defineComponent, h } = require('vue');

const TagStackTilted = defineComponent({
  name: 'TagStackTilted',
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
          h('path', {"d":"M3 7L3 12.586C3 12.852 3.105 13.105 3.293 13.293L11.707 21.707C12.098 22.098 12.73 22.098 13.121 21.707L18.707 16.121C19.098 15.73 19.098 15.098 18.707 14.707L10.293 6.293C10.105 6.105 9.852 6 9.586 6L4 6C3.449 6 3 6.449 3 7Z"}),
          h('path', {"d":"M21 11L12.293 2.293C12.105 2.105 11.852 2 11.586 2L6 2"}),
          h('path', {"d":"M7.5 11C7.223 11 7 10.777 7 10.5C7 10.223 7.223 10 7.5 10C7.777 10 8 10.223 8 10.5C8 10.777 7.777 11 7.5 11Z"})
        ]
      );
  }
});

module.exports = TagStackTilted;
module.exports.TagStackTilted = TagStackTilted;
module.exports.default = TagStackTilted;
