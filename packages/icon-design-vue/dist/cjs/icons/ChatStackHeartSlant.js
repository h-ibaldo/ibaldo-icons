'use strict';

const { defineComponent, h } = require('vue');

const ChatStackHeartSlant = defineComponent({
  name: 'ChatStackHeartSlant',
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
          h('path', {"d":"M2 9L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z"}),
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2"}),
          h('path', {"d":"M9.422 14.492L7.148 12.219C6.473 11.543 6.473 10.449 7.148 9.773C7.824 9.098 8.918 9.098 9.594 9.773L10 10.184L10.406 9.773C11.082 9.098 12.176 9.098 12.852 9.773C13.527 10.449 13.527 11.543 12.852 12.219L10.574 14.492C10.258 14.813 9.742 14.813 9.422 14.492Z"})
        ]
      );
  }
});

module.exports = ChatStackHeartSlant;
module.exports.ChatStackHeartSlant = ChatStackHeartSlant;
module.exports.default = ChatStackHeartSlant;
