'use strict';

const { defineComponent, h } = require('vue');

const TabPlusCenterStep = defineComponent({
  name: 'TabPlusCenterStep',
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
          h('polygon', {"points":"22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 11.025268532079281 1.99877930112325 11.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325"}),
          h('line', {"x1":"22.025268532079281","y1":"1.99877930112325","x2":"15.025268532079281","y2":"1.99877930112325"}),
          h('line', {"x1":"12.025268532079281","y1":"10.99877930112325","x2":"12.025268532079281","y2":"17.99877930112325"}),
          h('line', {"x1":"15.525268532079281","y1":"14.49877930112325","x2":"8.525268532079281","y2":"14.49877930112325"})
        ]
      );
  }
});

module.exports = TabPlusCenterStep;
module.exports.TabPlusCenterStep = TabPlusCenterStep;
module.exports.default = TabPlusCenterStep;
