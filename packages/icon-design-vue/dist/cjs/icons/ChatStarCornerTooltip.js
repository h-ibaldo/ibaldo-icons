'use strict';

const { defineComponent, h } = require('vue');

const ChatStarCornerTooltip = defineComponent({
  name: 'ChatStarCornerTooltip',
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
          h('path', {"d":"M16.426 2.266L17.785 5.02L20.828 5.461C21.215 5.52 21.371 5.996 21.09 6.27L18.887 8.414L19.41 11.445C19.473 11.832 19.066 12.129 18.719 11.945L16 10.516L13.281 11.945C12.934 12.129 12.523 11.832 12.594 11.445L13.109 8.414L10.91 6.27C10.629 5.996 10.785 5.52 11.176 5.461L14.215 5.02L15.574 2.266C15.75 1.91 16.25 1.91 16.426 2.266Z"}),
          h('path', {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 14"})
        ]
      );
  }
});

module.exports = ChatStarCornerTooltip;
module.exports.ChatStarCornerTooltip = ChatStarCornerTooltip;
module.exports.default = ChatStarCornerTooltip;
