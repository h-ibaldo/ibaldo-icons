'use strict';

const { defineComponent, h } = require('vue');

const TabXCircleStep = defineComponent({
  name: 'TabXCircleStep',
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
          h('polyline', {"points":"9.0252685320811 21.99877930112325 2.0252685320811 21.99877930112325 2.0252685320811 1.99877930112325 11.0252685320811 1.99877930112325 11.0252685320811 5.99877930112325 22.0252685320811 5.99877930112325 22.0252685320811 8.998779301119612"}),
          h('line', {"x1":"22.0252685320811","y1":"1.99877930112325","x2":"15.0252685320811","y2":"1.99877930112325"}),
          h('g', {}, [
            h('circle', {"cx":"16.525268529728237","cy":"16.498779303550691","r":"5.499999997577106"}),
            h('line', {"x1":"18.025268532150221","y1":"14.99877930112325","x2":"15.025268532150221","y2":"17.99877930112325"}),
            h('line', {"x1":"15.025268532219343","y1":"14.998779301057766","x2":"18.0252685320811","y2":"17.998779301192371"})
          ])
        ]
      );
  }
});

module.exports = TabXCircleStep;
module.exports.TabXCircleStep = TabXCircleStep;
module.exports.default = TabXCircleStep;
