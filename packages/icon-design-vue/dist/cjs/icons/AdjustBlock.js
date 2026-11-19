'use strict';

const { defineComponent, h } = require('vue');

const AdjustBlock = defineComponent({
  name: 'AdjustBlock',
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
          h('line', {"x1":"9.999999990754077","y1":"4.99999999973079","x2":"21.99999999074862","y2":"5.000000000439286"}),
          h('line', {"x1":"1.999999990756805","y1":"5.000000000170985","x2":"4.999999990754077","y2":"5.000000000308319"}),
          h('rect', {"x":"4.999999990754077","y":"1.99999999973079","width":"4.999999999999091","height":"6","rx":"1","ry":"1"}),
          h('rect', {"x":"13.999999990754077","y":"8.99999999973079","width":"4.999999999999091","height":"6","rx":"1","ry":"1"}),
          h('line', {"x1":"9.999999990754077","y1":"18.99999999973079","x2":"21.99999999074862","y2":"19.000000000439286"}),
          h('line', {"x1":"1.999999990756805","y1":"19.000000000170985","x2":"4.999999990754077","y2":"19.000000000308319"}),
          h('rect', {"x":"4.999999990754077","y":"15.99999999973079","width":"4.999999999999091","height":"6","rx":"1","ry":"1"}),
          h('line', {"x1":"13.999999990574906","y1":"12.000000000627551","x2":"1.999999990754077","y2":"11.999999998838575"}),
          h('line', {"x1":"21.99999999074862","y1":"11.999999999929969","x2":"18.999999990574906","y2":"11.999999999527972"})
        ]
      );
  }
});

module.exports = AdjustBlock;
module.exports.AdjustBlock = AdjustBlock;
module.exports.default = AdjustBlock;
