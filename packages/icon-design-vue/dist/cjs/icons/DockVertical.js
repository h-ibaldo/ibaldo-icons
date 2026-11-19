'use strict';

const { defineComponent, h } = require('vue');

const DockVertical = defineComponent({
  name: 'DockVertical',
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
          h('rect', {"x":"1.974731417511066","y":"1.998779298535737","width":"20","height":"20","rx":"1","ry":"1"}),
          h('line', {"x1":"1.974731417511066","y1":"5.998779298535737","x2":"21.974731417511066","y2":"5.998779298535737"}),
          h('line', {"x1":"7.974731417471048","y1":"14.498779298357476","x2":"7.974731417511066","y2":"13.498779298357476"}),
          h('line', {"x1":"11.974731417471048","y1":"14.498779298535737","x2":"11.974731417511066","y2":"13.498779298535737"}),
          h('line', {"x1":"11.974731417471048","y1":"14.498779298535737","x2":"11.974731417511066","y2":"13.498779298535737"}),
          h('line', {"x1":"15.974731417471048","y1":"14.498779298717636","x2":"15.974731417511066","y2":"13.498779298717636"})
        ]
      );
  }
});

module.exports = DockVertical;
module.exports.DockVertical = DockVertical;
module.exports.default = DockVertical;
