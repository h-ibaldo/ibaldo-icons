'use strict';

const { defineComponent, h } = require('vue');

const TabPlusCircleStep = defineComponent({
  name: 'TabPlusCircleStep',
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
          h('polyline', {"points":"10.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 11.025268532079281 1.99877930112325 11.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 9.99877930112325"}),
          h('line', {"x1":"22.025268532079281","y1":"1.99877930112325","x2":"15.025268532079281","y2":"1.99877930112325"}),
          h('g', {}, [
            h('circle', {"cx":"17.025268532090195","cy":"16.998779306063625","r":"5"}),
            h('g', {}, [
              h('line', {"x1":"17.025268532090195","y1":"14.998779301214199","x2":"17.025268532090195","y2":"18.998779301211471"}),
              h('line', {"x1":"19.025268532079281","y1":"16.99877930112325","x2":"15.025268532079281","y2":"16.998779301301511"})
            ])
          ])
        ]
      );
  }
});

module.exports = TabPlusCircleStep;
module.exports.TabPlusCircleStep = TabPlusCircleStep;
module.exports.default = TabPlusCircleStep;
