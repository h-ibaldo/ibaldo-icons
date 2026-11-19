'use strict';

const { defineComponent, h } = require('vue');

const AtTall = defineComponent({
  name: 'AtTall',
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
          h('rect', {"x":"9.025264919242545","y":"7.0000000003769","width":"5.999999910608494","height":"9.999999999999488","rx":"2.999996965248122","ry":"2.999996965248122"}),
          h('line', {"x1":"17.025268559869801","y1":"22.00000000071941","x2":"12.025268559869801","y2":"22.000000000721229"}),
          h('path', {"d":"M20.025268559869801,14.0000080007203v-4.000016000000869c0-4.418273580367895-3.581718419620302-7.99999200000002-7.999991999999111-7.99999200000002h-.000016000001779c-4.418273580369714,0-7.999991999999111,3.581718419632125-7.999991999999111,7.99999200000002v4.000016000000869c0,4.418273580367895,3.581718419629397,7.999991999999111,7.999991999999111,7.999991999999111h.000016000001779"}),
          h('path', {"d":"M15.025268559869801,14.00000000071941v1c0,1.10456949966283.895430500349903,2,2,2h1c1.104569499659192,0,2-.89543050033717,2-2v-1.000000000001819"})
        ]
      );
  }
});

module.exports = AtTall;
module.exports.AtTall = AtTall;
module.exports.default = AtTall;
