'use strict';

const { defineComponent, h } = require('vue');

const ChatDollarWide = defineComponent({
  name: 'ChatDollarWide',
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
          h('path', {"d":"M14 7.5L13.688 7.395C12.898 7.133 12.078 7 11.25 7C10.285 7 9.5 7.781 9.5 8.75C9.5 9.719 10.285 10.5 11.25 10.5L12.75 10.5C13.715 10.5 14.5 11.281 14.5 12.25C14.5 13.219 13.715 14 12.75 14C11.922 14 11.102 13.867 10.313 13.605L10 13.5"}),
          h('path', {"d":"M12 6L12 7"}),
          h('path', {"d":"M12 14L12 15"}),
          h('path', {"d":"M14.5 3L9.5 3C5.359 3 2 6.355 2 10.5C2 13.766 4.09 16.531 7 17.563L7 22L11.668 18L14.5 18C18.641 18 22 14.645 22 10.5C22 6.355 18.641 3 14.5 3Z"})
        ]
      );
  }
});

module.exports = ChatDollarWide;
module.exports.ChatDollarWide = ChatDollarWide;
module.exports.default = ChatDollarWide;
