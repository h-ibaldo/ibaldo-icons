'use strict';

const { defineComponent, h } = require('vue');

const SwitchKnobUpLeft = defineComponent({
  name: 'SwitchKnobUpLeft',
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
          h('circle', {"cx":"11.99999997708619","cy":"11.997562035419833","r":"10"}),
          h('line', {"x1":"4.928932165386868","y1":"4.92649422339673","x2":"9.171572852405006","y2":"9.169134910611319"})
        ]
      );
  }
});

module.exports = SwitchKnobUpLeft;
module.exports.SwitchKnobUpLeft = SwitchKnobUpLeft;
module.exports.default = SwitchKnobUpLeft;
