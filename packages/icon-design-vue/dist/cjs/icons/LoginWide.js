'use strict';

const { defineComponent, h } = require('vue');

const LoginWide = defineComponent({
  name: 'LoginWide',
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
          h('polyline', {"points":"13.974731449592582 17.000000000347427 8.974731450040053 11.999999999895408 13.974731450491163 7.000000000347427"}),
          h('line', {"x1":"21.974731450043691","y1":"12.000000001063199","x2":"8.974731450040053","y2":"11.999999999895408"}),
          h('path', {"d":"M12.974731450043691,22.000000000481123H4.974731450043691c-1.656854249488788,0-3-1.343145750508484-3-3V5.000000000481123c0-1.656854249493335,1.343145750511212-3,3-3h8"})
        ]
      );
  }
});

module.exports = LoginWide;
module.exports.LoginWide = LoginWide;
module.exports.default = LoginWide;
