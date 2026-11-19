'use strict';

const { defineComponent, h } = require('vue');

const TabCheckCenterStep = defineComponent({
  name: 'TabCheckCenterStep',
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
          h('polygon', {"points":"22.025268532079281 21.998779305074095 2.025268532079281 21.998779305074095 2.025268532079281 1.998779305074095 11.025268532079281 1.998779305074095 11.025268532079281 5.998779305074095 22.025268532079281 5.998779305074095 22.025268532079281 21.998779305074095"}),
          h('line', {"x1":"22.025268532079281","y1":"1.998779305074095","x2":"15.025268532079281","y2":"1.998779305074095"}),
          h('polyline', {"points":"8.025268532079281 13.99877930112325 11.025268532079281 16.99877930112325 16.025268532079281 11.99877930112325"})
        ]
      );
  }
});

module.exports = TabCheckCenterStep;
module.exports.TabCheckCenterStep = TabCheckCenterStep;
module.exports.default = TabCheckCenterStep;
