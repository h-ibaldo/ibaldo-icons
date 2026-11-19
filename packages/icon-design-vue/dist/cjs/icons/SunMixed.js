'use strict';

const { defineComponent, h } = require('vue');

const SunMixed = defineComponent({
  name: 'SunMixed',
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
          h('circle', {"cx":"12","cy":"12.000000005924448","r":"4"}),
          h('line', {"x1":"20","y1":"12.000000006284608","x2":"22","y2":"12.000000006373739"}),
          h('line', {"x1":"2","y1":"12.000000005475158","x2":"4","y2":"12.000000005566108"}),
          h('line', {"x1":"11.999999999641659","y1":"20.000000005924448","x2":"11.99999999955071","y2":"22.000000005924448"}),
          h('line', {"x1":"12.00000000044929","y1":"2.000000005924448","x2":"12.000000000358341","y2":"4.000000005924448"}),
          h('line', {"x1":"14.828427124683003","y1":"14.828427130731143","x2":"19.07106781170296","y2":"19.071067817953008"}),
          h('line', {"x1":"4.928932188287945","y1":"4.928932193897708","x2":"9.171572875316997","y2":"9.171572881117754"}),
          h('line', {"x1":"9.171572875313359","y1":"14.8284271307366","x2":"4.928932188291583","y2":"19.071067817947551"}),
          h('line', {"x1":"19.071067811708417","y1":"4.928932193903165","x2":"14.828427124686641","y2":"9.171572881112297"})
        ]
      );
  }
});

module.exports = SunMixed;
module.exports.SunMixed = SunMixed;
module.exports.default = SunMixed;
