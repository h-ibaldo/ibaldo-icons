'use strict';

const { defineComponent, h } = require('vue');

const TrashRecycleRoundNotch = defineComponent({
  name: 'TrashRecycleRoundNotch',
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
          h('polyline', {"points":"22.0252685457599 3.999999999728971 15.0252685457599 4.000000000042746 15.025268545668951 2.000000000042746 9.025268545668951 2.000000000313776 9.0252685457599 4.000000000313776 2.0252685457599 4.000000000626642"}),
          h('path', {"d":"M20.0252685457599,3.999999999818101l.00000000072032,16c.000000000049113,1.104569499661011-.895430500249859,2.000000000041837-1.99999999991087,2.00000000009004l-12,.00000000054024c-1.104569499659192.000000000047294-2.000000000040018-.895430500248949-2.00000000008913-1.999999999912689l-.00000000072032-16"}),
          h('g', {}, [
            h('path', {"d":"M10.025268546109146,9.554748535198087c-1.190673828128638.692932128907159-2,1.968444824219659-2,3.445251464844659"}),
            h('path', {"d":"M16.025268546109146,13.000000000042746c0-1.476806640625-.809326171878638-2.7523193359375-2-3.445251464844659"}),
            h('path', {"d":"M10.042114249230508,16.454345703167746c.586669921878638.337646484375,1.257568359378638.545654296875,1.983154296878638.545654296875s1.396484375-.2080078125,1.983154296871362-.545654296875"})
          ])
        ]
      );
  }
});

module.exports = TrashRecycleRoundNotch;
module.exports.TrashRecycleRoundNotch = TrashRecycleRoundNotch;
module.exports.default = TrashRecycleRoundNotch;
