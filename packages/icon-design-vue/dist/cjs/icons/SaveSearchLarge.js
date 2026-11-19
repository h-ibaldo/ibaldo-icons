'use strict';

const { defineComponent, h } = require('vue');

const SaveSearchLarge = defineComponent({
  name: 'SaveSearchLarge',
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
          h('path', {"d":"M8.974731440099276,16.000000003885361H3.974731440099276c-1.104569499659192,0-2-.895430500338989-2-2V4.000000003885361c0-1.104569499661011.895430500340808-2,2-2h8.17157224750008c.530433351021202,0,1.039141501631093.210713974949613,1.414214320151586.585787195414014l1.828427752519929,1.828429711989884c.375072293318226.375072695282142.585785679828405.883780196265434.585785679828405,1.414212804585986v3.171570288010116"}),
          h('circle', {"cx":"16.474731440099276","cy":"16.500000003885361","r":"4.5"}),
          h('polyline', {"points":"5.974731440099276 16.000000003885361 5.974731440099276 11.000000003885361 10.974731440099276 11.000000003885361"}),
          h('polyline', {"points":"5.974731440099276 2.000000003885361 5.974731440099276 6.000000003885361 11.974731440099276 6.000000003885361 11.974731440099276 2.000000003885361"}),
          h('line', {"x1":"19.656738276049509","y1":"19.682006839822861","x2":"21.974731440099276","y2":"22.000000003885361"})
        ]
      );
  }
});

module.exports = SaveSearchLarge;
module.exports.SaveSearchLarge = SaveSearchLarge;
module.exports.default = SaveSearchLarge;
