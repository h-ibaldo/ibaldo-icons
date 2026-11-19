'use strict';

const { defineComponent, h } = require('vue');

const TabXCircleStriped = defineComponent({
  name: 'TabXCircleStriped',
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
          h('path', {"d":"M9.025268532090195,21.99877930112325h-5c-1.104569499670106,0-2-.895430500338989-2-2V3.99877930112325c0-1.104569499661011.895430500329894-2,2-2h2c.62951460666045,0,1.222291235999364.296388314665819,1.59999999998945.799999999999272l2.100000000009459,2.799999999999272c.1888543820005.251805842668546.485242696660862.400000000001455.800000000001091.400000000001455h9.5c1.104569499659192,0,2,.895430500338989,2,2v1"}),
          h('path', {"d":"M6.025268532090195,1.99877930112325h6c.62951460666045,0,1.222291235999364.296388314665819,1.59999999998945.799999999999272l2.40000000001055,3.200000000000728"}),
          h('path', {"d":"M12.025268532090195,1.99877930112325h6c.62951460666045,0,1.222291235999364.296388314665819,1.59999999998945.799999999999272l1.799999999999272,2.400000000001455c.389466384411207.51928851253615.600000000011278,1.150889359324538.600000000011278,1.799999999999272v1"}),
          h('g', {}, [
            h('circle', {"cx":"16.525268529728237","cy":"16.498779303550691","r":"5.499999997577106"}),
            h('line', {"x1":"18.025268532150221","y1":"14.99877930112325","x2":"15.025268532150221","y2":"17.99877930112325"}),
            h('line', {"x1":"15.025268532219343","y1":"14.998779301057766","x2":"18.025268532090195","y2":"17.998779301192371"})
          ])
        ]
      );
  }
});

module.exports = TabXCircleStriped;
module.exports.TabXCircleStriped = TabXCircleStriped;
module.exports.default = TabXCircleStriped;
