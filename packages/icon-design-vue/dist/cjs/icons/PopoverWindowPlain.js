'use strict';

const { defineComponent, h } = require('vue');

const PopoverWindowPlain = defineComponent({
  name: 'PopoverWindowPlain',
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
          h('path', {"d":"M19,18h-4l-3,4-3-4h-4c-1.104569499659192,0-2-.895430500338989-2-2V4c0-1.104569499661011.895430500340808-2,2-2h14c1.104569499670106,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500329894,2-2,2Z"}),
          h('line', {"x1":"3","y1":"6","x2":"21","y2":"6"}),
          h('line', {"x1":"7","y1":"10","x2":"17","y2":"10"}),
          h('line', {"x1":"7","y1":"14","x2":"15","y2":"14"})
        ]
      );
  }
});

module.exports = PopoverWindowPlain;
module.exports.PopoverWindowPlain = PopoverWindowPlain;
module.exports.default = PopoverWindowPlain;
