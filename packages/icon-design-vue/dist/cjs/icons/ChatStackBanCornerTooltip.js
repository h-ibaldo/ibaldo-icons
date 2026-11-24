'use strict';

const { defineComponent, h } = require('vue');

const ChatStackBanCornerTooltip = defineComponent({
  name: 'ChatStackBanCornerTooltip',
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
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L15 2"}),
          h('path', {"d":"M2 14L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 10.234C18 8.863 17.227 7.613 16 7"}),
          h('path', {"d":"M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z"}),
          h('path', {"d":"M10.535 3.465L3.465 10.535"})
        ]
      );
  }
});

module.exports = ChatStackBanCornerTooltip;
module.exports.ChatStackBanCornerTooltip = ChatStackBanCornerTooltip;
module.exports.default = ChatStackBanCornerTooltip;
