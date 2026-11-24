'use strict';

const { defineComponent, h } = require('vue');

const TagSquareTilted = defineComponent({
  name: 'TagSquareTilted',
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
          h('path', {"d":"M22 15L22 17C22 19.762 19.762 22 17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L9 2"}),
          h('path', {"d":"M22 4L22 8.172C22 8.703 21.789 9.211 21.414 9.586L15.414 15.586C14.633 16.367 13.367 16.367 12.586 15.586L8.414 11.414C7.633 10.633 7.633 9.367 8.414 8.586L14.414 2.586C14.789 2.211 15.297 2 15.828 2L20 2C21.105 2 22 2.895 22 4Z"}),
          h('path', {"d":"M17.5 7C17.777 7 18 6.777 18 6.5C18 6.223 17.777 6 17.5 6C17.223 6 17 6.223 17 6.5C17 6.777 17.223 7 17.5 7Z"})
        ]
      );
  }
});

module.exports = TagSquareTilted;
module.exports.TagSquareTilted = TagSquareTilted;
module.exports.default = TagSquareTilted;
