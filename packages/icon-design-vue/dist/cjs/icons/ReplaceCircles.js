'use strict';

const { defineComponent, h } = require('vue');

const ReplaceCircles = defineComponent({
  name: 'ReplaceCircles',
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
          h('circle', {"cx":"4.949462884867444","cy":"5.000000000826731","r":"3.000000000274472"}),
          h('circle', {"cx":"18.949462885429057","cy":"19.000000000130967","r":"2.999999999650655"}),
          h('polyline', {"points":"21.679561208527957 10.41638982463337 19.558240865013431 12.537710168242484 17.436920521407956 10.416389824727958"}),
          h('path', {"d":"M6.123212022582265,17.487457636849285c1.785505044258571,1.785505044175807,4.204531843924997,2.546041890927881,6.53335764426447,2.290716956948017"}),
          h('path', {"d":"M19.747317696577738,12.3486333366709c.143674223250855-2.21665718924487-.61621524801194-4.480702271885093-2.31039717526437-6.174884199062944"}),
          h('polyline', {"points":"2.049967948266385 13.41421356234423 4.171288291967358 11.292893218927929 6.292608635386387 13.41421356263163"}),
          h('path', {"d":"M17.606317134842357,6.343145751528937c-1.785505044094862-1.785505044339516-4.204531843697623-2.546041891306231-6.533357644058015-2.290716957533732"}),
          h('path', {"d":"M3.982211460388498,11.481970050481323c-.143674223452763,2.216657189233956.616215247610853,4.480702271943301,2.310397174708669,6.174884199270309"})
        ]
      );
  }
});

module.exports = ReplaceCircles;
module.exports.ReplaceCircles = ReplaceCircles;
module.exports.default = ReplaceCircles;
