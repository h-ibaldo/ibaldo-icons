'use strict';

const { defineComponent, h } = require('vue');

const MobileChat = defineComponent({
  name: 'MobileChat',
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
          h('path', {"d":"M19,13.998779303362426h-5l-3,2v-2h-2c-1.104569499659192,0-2-.895430500338989-2-2v-1c0-1.104569499661011.895430500340808-2,2-2h10c1.104569499670106,0,2,.895430500338989,2,2v1c0,1.104569499661011-.895430500329894,2-2,2Z"}),
          h('path', {"d":"M17,16.998779303362426v3c0,1.104569499661011-.895430500329894,2-2,2H5c-1.104569499659192,0-2-.895430500338989-2-2V3.998779303362426c0-1.104569499661011.895430500340808-2,2-2h10c1.104569499670106,0,2,.895430500338989,2,2v5"}),
          h('line', {"x1":"3","y1":"4.998779303362426","x2":"17","y2":"4.998779303362426"}),
          h('line', {"x1":"3","y1":"18.998779303362426","x2":"17","y2":"18.998779303362426"})
        ]
      );
  }
});

module.exports = MobileChat;
module.exports.MobileChat = MobileChat;
module.exports.default = MobileChat;
