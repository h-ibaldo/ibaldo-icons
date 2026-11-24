'use strict';

const { defineComponent, h } = require('vue');

const WindowChat = defineComponent({
  name: 'WindowChat',
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
          h('path', {"d":"M9.890557941264888,14.000000000448381v3c0,1.104569499661011.895430500338989,2,2,2h1v3l4-3h3c1.104569499661011,0,2-.895430500338989,2-2v-3c0-1.104569499661011-.895430500338989-2-2-2h-8c-1.104569499661011,0-2,.895430500338989-2,2Z"}),
          h('path', {"d":"M22.000000000184627,9.000000000448381v-5c0-1.10456949966192-.895430500338989-2-2-2H4.000000000184627c-1.104569499661011,0-2,.89543050033808-2,2v16c0,1.10456949966283.895430500338989,2,2,2h5"}),
          h('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381"}),
          h('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381"})
        ]
      );
  }
});

module.exports = WindowChat;
module.exports.WindowChat = WindowChat;
module.exports.default = WindowChat;
