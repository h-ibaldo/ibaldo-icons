'use strict';

const { defineComponent, h } = require('vue');

const LogoutWide = defineComponent({
  name: 'LogoutWide',
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
          h('polyline', {"points":"16.974731450040053 7.000000000481123 21.974731450043691 12.000000000481123 16.974731450040053 17.000000000481123"}),
          h('line', {"x1":"8.974731450040053","y1":"12.000000000481123","x2":"21.974731450043691","y2":"12.000000000481123"}),
          h('path', {"d":"M12.974731450043691,22.000000000481123H4.974731450043691c-1.656854249493335,0-3-1.343145750508484-3-3V5.000000000481123c0-1.656854249493335,1.343145750506665-3,3-3h8"})
        ]
      );
  }
});

module.exports = LogoutWide;
module.exports.LogoutWide = LogoutWide;
module.exports.default = LogoutWide;
