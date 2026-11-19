'use strict';

const { defineComponent, h } = require('vue');

const HouseDoorEaves = defineComponent({
  name: 'HouseDoorEaves',
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
          h('path', {"d":"M21.787135120239327,13.000000000842192L13.553536993700618,4.017901874094605c-.831365098711103-.906942843332217-2.261178365921296-.906942843332217-3.09254346463058,0L2.227395402520415,13.000000000842192"}),
          h('polyline', {"points":"5.00000000018008 14.000000000842192 5.007263183770192 21.000000000842192 10.00000000018008 21.000000000842192 10.00000000018008 15.000000000842192 14.00000000018008 15.000000000842192 14.00000000018008 21.000000000842192 19.007263183770192 21.000000000842192 19.00000000018008 14.000000000842192"})
        ]
      );
  }
});

module.exports = HouseDoorEaves;
module.exports.HouseDoorEaves = HouseDoorEaves;
module.exports.default = HouseDoorEaves;
