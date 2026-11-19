'use strict';

const { defineComponent, h } = require('vue');

const AdjustPairBlock = defineComponent({
  name: 'AdjustPairBlock',
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
          h('line', {"x1":"10.999999990754077","y1":"6.99999999973079","x2":"21.99999999074862","y2":"7.000000000439286"}),
          h('line', {"x1":"1.999999990754077","y1":"7.000000000170985","x2":"5.999999990754077","y2":"7.000000000308319"}),
          h('rect', {"x":"5.999999990754077","y":"2.99999999973079","width":"4.999999999999091","height":"8","rx":"1","ry":"1"}),
          h('line', {"x1":"12.999999990934157","y1":"16.99999999946067","x2":"1.999999990753167","y2":"16.999999997668965"}),
          h('line', {"x1":"21.99999999074862","y1":"16.999999999738975","x2":"17.999999990934157","y2":"16.999999999329702"}),
          h('rect', {"x":"12.999999990935066","y":"12.999999999684405","width":"5","height":"8","rx":".999999999999989","ry":".999999999999989","transform":"translate(30.999999980323992 34.000000000778527) rotate(-180)"})
        ]
      );
  }
});

module.exports = AdjustPairBlock;
module.exports.AdjustPairBlock = AdjustPairBlock;
module.exports.default = AdjustPairBlock;
