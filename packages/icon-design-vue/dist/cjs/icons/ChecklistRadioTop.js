'use strict';

const { defineComponent, h } = require('vue');

const ChecklistRadioTop = defineComponent({
  name: 'ChecklistRadioTop',
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
          h('line', {"x1":"10.000000000260115","y1":"4.032754075946286","x2":"22.000000000260115","y2":"4.032754075946286"}),
          h('line', {"x1":"10.000000000260115","y1":"12.032754075946286","x2":"22.000000000260115","y2":"12.032754075946286"}),
          h('line', {"x1":"10.000000000260115","y1":"20.032754075946286","x2":"22.000000000260115","y2":"20.032754075946286"}),
          h('rect', {"x":"1.999999994798017","y":"2.032754065191796","width":"4.000000010843934","height":"3.999999993205051","rx":"1.999997988538197","ry":"1.999997988538197"}),
          h('rect', {"x":"1.999999994798017","y":"10.032754060027656","width":"4.000000010843934","height":"4.000000003324601","rx":"1.999997993654768","ry":"1.999997993654768"}),
          h('rect', {"x":"1.999999994798017","y":"18.032754065149959","width":"4.000000010843934","height":"3.999999993079996","rx":"1.999997992257776","ry":"1.999997992257776"}),
          h('rect', {"x":"2.999999993418101","y":"3.032754077664691","width":"2.000000013603994","height":"1.99999999656319","rx":".999999020944945","ry":".999999020944945"})
        ]
      );
  }
});

module.exports = ChecklistRadioTop;
module.exports.ChecklistRadioTop = ChecklistRadioTop;
module.exports.default = ChecklistRadioTop;
