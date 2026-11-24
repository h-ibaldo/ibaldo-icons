'use strict';

const { defineComponent, h } = require('vue');

const SunShortLarge = defineComponent({
  name: 'SunShortLarge',
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
          h('circle', {"cx":"11.999999990796823","cy":"12.000000000448381","r":"6"}),
          h('line', {"x1":"11.999999990796823","y1":"2.000000000448381","x2":"11.999999990796823","y2":"3.000000000448381"}),
          h('line', {"x1":"11.999999990796823","y1":"21.000000000448381","x2":"11.999999990796823","y2":"22.000000000448381"}),
          h('line', {"x1":"21.999999990796823","y1":"12.000000000448381","x2":"20.999999990796823","y2":"12.000000000448381"}),
          h('line', {"x1":"2.999999990796823","y1":"12.000000000448381","x2":"1.999999990796823","y2":"12.000000000448381"}),
          h('line', {"x1":"19.071067802503421","y1":"4.92893218842255","x2":"18.363961021333125","y2":"5.636038969624678"}),
          h('line', {"x1":"5.63603896026143","y1":"18.363961031267536","x2":"4.928932179090225","y2":"19.071067812470574"}),
          h('line', {"x1":"19.071067802821744","y1":"19.071067812154979","x2":"18.363961021618707","y2":"18.363961030984683"}),
          h('line', {"x1":"5.636038959976759","y1":"5.636038969912988","x2":"4.928932178773721","y2":"4.928932188741783"})
        ]
      );
  }
});

module.exports = SunShortLarge;
module.exports.SunShortLarge = SunShortLarge;
module.exports.default = SunShortLarge;
