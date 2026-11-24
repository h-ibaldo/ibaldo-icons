'use strict';

const { defineComponent, h } = require('vue');

const BotChat = defineComponent({
  name: 'BotChat',
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
          h('path', {"d":"M12 7L12 3"}),
          h('path', {"d":"M11 3C11 2.449 11.449 2 12 2C12.551 2 13 2.449 13 3C13 3.551 12.551 4 12 4C11.449 4 11 3.551 11 3Z"}),
          h('path', {"d":"M4 10L4 22L8 19L17 19C18.656 19 20 17.656 20 16L20 10C20 8.344 18.656 7 17 7L7 7C5.344 7 4 8.344 4 10Z"}),
          h('path', {"d":"M20 11L22 11L22 15L20 15"}),
          h('path', {"d":"M4 15L2 15L2 11L4 11"}),
          h('path', {"d":"M8 11L9 11L9 12L8 12Z"}),
          h('path', {"d":"M15 11L16 11L16 12L15 12Z"}),
          h('path', {"d":"M10 15L10.293 15.293C10.746 15.746 11.359 16 12 16C12.641 16 13.254 15.746 13.707 15.293L14 15"})
        ]
      );
  }
});

module.exports = BotChat;
module.exports.BotChat = BotChat;
module.exports.default = BotChat;
