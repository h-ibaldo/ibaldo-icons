'use strict';

const { defineComponent, h } = require('vue');

const SwitchDialOff = defineComponent({
  name: 'SwitchDialOff',
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
          h('circle', {"cx":"11.97473141363912","cy":"15.998779298524823","r":"6.00000000000216"}),
          h('line', {"x1":"7.732090726536626","y1":"11.756138611388451","x2":"11.267624632466323","y2":"15.291672517319967"}),
          h('rect', {"x":"1.974738027380369","y":"1.9987792977455","width":"4.000000025022189","height":"5.999999999998408","rx":"1.999998016072261","ry":"1.999998016072261"}),
          h('line', {"x1":"19.974731413605696","y1":"1.998779298537556","x2":"19.974731413605696","y2":"7.998779298537556"})
        ]
      );
  }
});

module.exports = SwitchDialOff;
module.exports.SwitchDialOff = SwitchDialOff;
module.exports.default = SwitchDialOff;
