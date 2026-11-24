'use strict';

const { defineComponent, h } = require('vue');

const HouseDoorChimney = defineComponent({
  name: 'HouseDoorChimney',
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
          h('polygon', {"points":"12.00000000018008 3.000000000842192 2.00000000018008 12.000000000842192 5.00000000018008 12.000000000842192 5.00000000018008 21.000000000842192 10.00000000018008 21.000000000842192 10.00000000018008 16.000000000842192 14.00000000018008 16.000000000842192 14.00000000018008 21.000000000842192 19.00000000018008 21.000000000842192 19.00000000018008 12.000000000842192 22.00000000018008 12.000000000842192 12.00000000018008 3.000000000842192"}),
          h('line', {"x1":"18.00000000018008","y1":"4.000000000842192","x2":"18.00000000018008","y2":"8.280625818604676"})
        ]
      );
  }
});

module.exports = HouseDoorChimney;
module.exports.HouseDoorChimney = HouseDoorChimney;
module.exports.default = HouseDoorChimney;
