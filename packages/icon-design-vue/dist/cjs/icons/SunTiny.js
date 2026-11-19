'use strict';

const { defineComponent, h } = require('vue');

const SunTiny = defineComponent({
  name: 'SunTiny',
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
          h('line', {"x1":"12","y1":"21","x2":"12","y2":"22.000000005924448"}),
          h('line', {"x1":"12","y1":"3","x2":"12","y2":"2.000000005924448"}),
          h('line', {"x1":"3.000000005924448","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448"}),
          h('line', {"x1":"21.000000005924448","y1":"12.000000005924448","x2":"22","y2":"12.000000005924448"}),
          h('line', {"x1":"5.63603897365374","y1":"18.363961032557199","x2":"4.928932188293402","y2":"19.071067817947551"}),
          h('line', {"x1":"18.363961034725435","y1":"5.636038970913432","x2":"19.071067811706598","y2":"4.928932193901346"}),
          h('line', {"x1":"5.636038973367249","y1":"5.636038979577279","x2":"4.928932187975988","y2":"4.92893219421785"}),
          h('line', {"x1":"18.363961035011016","y1":"18.363961040649883","x2":"19.071067812024012","y2":"19.071067817631047"})
        ]
      );
  }
});

module.exports = SunTiny;
module.exports.SunTiny = SunTiny;
module.exports.default = SunTiny;
