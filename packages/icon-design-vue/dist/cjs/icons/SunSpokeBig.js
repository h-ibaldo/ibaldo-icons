'use strict';

const { defineComponent, h } = require('vue');

const SunSpokeBig = defineComponent({
  name: 'SunSpokeBig',
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
          h('circle', {"cx":"12.000000000314685","cy":"12.000000001974058","r":"4.999999999999773"}),
          h('line', {"x1":"2.000000000314685","y1":"12.000000001524313","x2":"7.000000000314685","y2":"12.000000001749868"}),
          h('line', {"x1":"17.000000000314685","y1":"12.000000002199158","x2":"22.000000000314685","y2":"12.000000002422894"}),
          h('line', {"x1":"4.928932188611725","y1":"4.928932189946863","x2":"8.464466094463205","y2":"8.46446609596569"}),
          h('line', {"x1":"15.535533906166165","y1":"15.535533907983336","x2":"19.071067812017645","y2":"19.071067814002163"}),
          h('line', {"x1":"12.000000000312866","y1":"2.000000001973604","x2":"12.000000000318323","y2":"7.000000001973604"}),
          h('line', {"x1":"12.000000000309228","y1":"17.000000001973604","x2":"12.000000000316504","y2":"22.000000001973604"}),
          h('line', {"x1":"19.071067812023102","y1":"4.92893218995232","x2":"15.535533906164346","y2":"8.464466095963871"}),
          h('line', {"x1":"8.464466094455929","y1":"15.535533907985155","x2":"4.928932188606268","y2":"19.071067813996706"})
        ]
      );
  }
});

module.exports = SunSpokeBig;
module.exports.SunSpokeBig = SunSpokeBig;
module.exports.default = SunSpokeBig;
