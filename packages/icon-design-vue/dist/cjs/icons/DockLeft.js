'use strict';

const { defineComponent, h } = require('vue');

const DockLeft = defineComponent({
  name: 'DockLeft',
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
          h('rect', {"x":"-2.025268582488934","y":"5.998779298535737","width":"20","height":"12","rx":"1","ry":"1","transform":"translate(19.973510716046803 4.02404788102467) rotate(90)"}),
          h('polyline', {"points":"21.974731417241856 14.998779298673981 18.974731417511066 11.998779298401132 21.974731417782095 8.998779298673981"}),
          h('line', {"x1":"1.974731417511066","y1":"5.998779298535737","x2":"13.974731417511066","y2":"5.998779298535737"})
        ]
      );
  }
});

module.exports = DockLeft;
module.exports.DockLeft = DockLeft;
module.exports.default = DockLeft;
