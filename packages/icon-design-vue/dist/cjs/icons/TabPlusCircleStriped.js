'use strict';

const { defineComponent, h } = require('vue');

const TabPlusCircleStriped = defineComponent({
  name: 'TabPlusCircleStriped',
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
          h('path', {"d":"M10.0252685320811,21.99877930112325h-6c-1.104569499661011,0-2-.895430500338989-2-2V3.99877930112325c0-1.104569499661011.895430500338989-2,2-2h2c.629514606669545,0,1.222291236008459.296388314665819,1.599999999998545.799999999999272l2.100000000000364,2.799999999999272c.1888543820005.251805842668546.485242696669957.400000000001455.800000000001091.400000000001455h9.5c1.104569499659192,0,2,.895430500338989,2,2v2"}),
          h('path', {"d":"M6.0252685320811,1.99877930112325h6c.629514606669545,0,1.222291236008459.296388314665819,1.599999999998545.799999999999272l2.400000000001455,3.200000000000728"}),
          h('path', {"d":"M12.0252685320811,1.99877930112325h6c.629514606669545,0,1.222291236008459.296388314665819,1.599999999998545.799999999999272l1.799999999999272,2.400000000001455c.389466384411207.51928851253615.600000000002183,1.150889359324538.600000000002183,1.799999999999272v1"}),
          h('g', {}, [
            h('circle', {"cx":"17.025268532090195","cy":"16.998779306063625","r":"5"}),
            h('g', {}, [
              h('line', {"x1":"17.025268532090195","y1":"14.998779301214199","x2":"17.025268532090195","y2":"18.998779301211471"}),
              h('line', {"x1":"19.0252685320811","y1":"16.99877930112325","x2":"15.0252685320811","y2":"16.998779301301511"})
            ])
          ])
        ]
      );
  }
});

module.exports = TabPlusCircleStriped;
module.exports.TabPlusCircleStriped = TabPlusCircleStriped;
module.exports.default = TabPlusCircleStriped;
