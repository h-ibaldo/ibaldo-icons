'use strict';

const { defineComponent, h } = require('vue');

const FilterLinesSquare = defineComponent({
  name: 'FilterLinesSquare',
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
          h('rect', {"x":"1.974731449501633","y":"2.000000000479304","width":"20","height":"20.000000000000909","rx":"2.999999999999863","ry":"2.999999999999863"}),
          h('line', {"x1":"6.974731449501633","y1":"8.000000000480213","x2":"16.974731449501633","y2":"8.000000000480213"}),
          h('line', {"x1":"8.974731449501633","y1":"12.000000000480213","x2":"14.974731449501633","y2":"12.000000000480213"}),
          h('line', {"x1":"10.974731449501633","y1":"16.000000000480213","x2":"12.974731449501633","y2":"16.000000000480213"})
        ]
      );
  }
});

module.exports = FilterLinesSquare;
module.exports.FilterLinesSquare = FilterLinesSquare;
module.exports.default = FilterLinesSquare;
