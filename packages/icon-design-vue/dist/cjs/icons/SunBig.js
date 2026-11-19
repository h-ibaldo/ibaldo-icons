'use strict';

const { defineComponent, h } = require('vue');

const SunBig = defineComponent({
  name: 'SunBig',
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
          h('circle', {"cx":"12","cy":"12.000000005924448","r":"5"}),
          h('line', {"x1":"12","y1":"2.000000005924448","x2":"12","y2":"4.000000005924448"}),
          h('line', {"x1":"12","y1":"20.000000005924448","x2":"12","y2":"22.000000005924448"}),
          h('line', {"x1":"22","y1":"12.000000005924448","x2":"20","y2":"12.000000005924448"}),
          h('line', {"x1":"4","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448"}),
          h('line', {"x1":"19.071067811710236","y1":"4.928932193895889","x2":"17.656854249360549","y2":"6.343145756305603"}),
          h('line', {"x1":"6.343145750630356","y1":"17.656854255545113","x2":"4.928932188289764","y2":"19.071067817945732"}),
          h('line', {"x1":"19.071067812019464","y1":"19.071067817634685","x2":"17.656854249620665","y2":"17.656854255284998"}),
          h('line', {"x1":"6.343145750379335","y1":"6.343145756563899","x2":"4.928932187980536","y2":"4.928932194216031"})
        ]
      );
  }
});

module.exports = SunBig;
module.exports.SunBig = SunBig;
module.exports.default = SunBig;
