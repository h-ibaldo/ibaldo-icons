'use strict';

const { defineComponent, h } = require('vue');

const PaneArrowRight = defineComponent({
  name: 'PaneArrowRight',
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
          h('rect', {"x":"1.99999999945976","y":"4.000000005698439","width":"20","height":"16","rx":"1.999999999999943","ry":"1.999999999999943","transform":"translate(23.999999997842451 24.000000012473947) rotate(-180)"}),
          h('line', {"x1":"7.99999999873944","y1":"20.000000005338734","x2":"8.00000000018008","y2":"4.000000005338734"}),
          h('line', {"x1":"11.99999999945976","y1":"12.000000006102709","x2":"17.99999999945976","y2":"12.000000005833499"}),
          h('polyline', {"points":"14.999999999588908 15.000000005968104 17.99999999945976 12.000000005833499 14.999999999330612 9.000000005968104"})
        ]
      );
  }
});

module.exports = PaneArrowRight;
module.exports.PaneArrowRight = PaneArrowRight;
module.exports.default = PaneArrowRight;
