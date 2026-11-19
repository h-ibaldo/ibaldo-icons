'use strict';

const { defineComponent, h } = require('vue');

const Vpn = defineComponent({
  name: 'Vpn',
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
          h('polyline', {"points":"2.016630450972116 8.000000000480213 4.516630450972116 16.000000000480213 7.016630450972116 8.000000000480213"}),
          h('line', {"x1":"10.516630450972116","y1":"8.000000000476575","x2":"10.516630450972116","y2":"16.000000000480213"}),
          h('path', {"d":"M10.516630450972116,8.000000000476575h2c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.104569499661011-.895430500338989,2-2,2h-2"}),
          h('polyline', {"points":"22.016630450972116 8.000000000480213 22.016630450972116 16.000000000480213 18.016630450972116 8.000000000476575 18.016630450972116 16.000000000476575"})
        ]
      );
  }
});

module.exports = Vpn;
module.exports.Vpn = Vpn;
module.exports.default = Vpn;
