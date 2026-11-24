'use strict';

const { defineComponent, h } = require('vue');

const TabCheckCircleSharp = defineComponent({
  name: 'TabCheckCircleSharp',
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
          h('g', {}, [
            h('circle', {"cx":"17.025268532090195","cy":"16.99877930112325","r":"5"}),
            h('polyline', {"points":"15.525268532090195 16.998779298696718 16.525268532090195 17.998779303549782 18.525268532090195 15.998779298696718"})
          ]),
          h('polyline', {"points":"10.025268532090195 21.99877930112325 2.025268532090195 21.99877930112325 2.025268532090195 1.99877930112325 10.025268532090195 1.99877930112325 13.025268532090195 5.99877930112325 22.025268532090195 5.99877930112325 22.025268532090195 9.99877930112325"}),
          h('polyline', {"points":"15.025268532090195 1.99877930112325 22.025268532090195 1.99877930112325 22.025268532090195 5.99877930112325"})
        ]
      );
  }
});

module.exports = TabCheckCircleSharp;
module.exports.TabCheckCircleSharp = TabCheckCircleSharp;
module.exports.default = TabCheckCircleSharp;
