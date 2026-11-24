'use strict';

const { defineComponent, h } = require('vue');

const WindowMedalBare = defineComponent({
  name: 'WindowMedalBare',
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
          h('circle', {"cx":"18.50000000018008","cy":"13.500000000448381","r":"3.5"}),
          h('polyline', {"points":"16.00000000018008 15.944396973104631 16.00000000018008 21.849891819731965 18.50000000018008 20.849891819731965 21.00000000018008 21.849891819731965 21.00000000018008 15.944396973104631"}),
          h('path', {"d":"M12.00000000018008,22.000000000448381l-8,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v3.150108180716416"}),
          h('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381"})
        ]
      );
  }
});

module.exports = WindowMedalBare;
module.exports.WindowMedalBare = WindowMedalBare;
module.exports.default = WindowMedalBare;
