'use strict';

const { defineComponent, h } = require('vue');

const ChatStackHeartBroken = defineComponent({
  name: 'ChatStackHeartBroken',
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
          h('path', {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 13"}),
          h('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18"}),
          h('path', {"d":"M13.422 14.492L11.148 12.219C10.473 11.543 10.473 10.449 11.148 9.773C11.824 9.098 12.918 9.098 13.594 9.773L14 10.184L14.406 9.773C15.082 9.098 16.176 9.098 16.852 9.773C17.527 10.449 17.527 11.543 16.852 12.219L14.574 14.492C14.258 14.813 13.742 14.813 13.422 14.492Z"})
        ]
      );
  }
});

module.exports = ChatStackHeartBroken;
module.exports.ChatStackHeartBroken = ChatStackHeartBroken;
module.exports.default = ChatStackHeartBroken;
