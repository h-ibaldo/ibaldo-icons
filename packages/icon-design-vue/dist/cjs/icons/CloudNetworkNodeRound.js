'use strict';

const { defineComponent, h } = require('vue');

const CloudNetworkNodeRound = defineComponent({
  name: 'CloudNetworkNodeRound',
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
          h('line', {"x1":"5","y1":"20.999999973497324","x2":"19","y2":"20.999999973497324"}),
          h('line', {"x1":"12","y1":"15.999999973497324","x2":"12","y2":"21.999999973497324"}),
          h('circle', {"cx":"12","cy":"20.999999973497324","r":"1"}),
          h('path', {"d":"M17.480529785150793,7.114257785997324c-.198791503900793-2.856750488288526-2.5732421875-5.1142578125-5.480529785150793-5.1142578125-2.907287597659888,0-5.28173828125,2.257507324211474-5.480529785159888,5.1142578125-2.012451171869543.448486328110448-3.519470214840112,2.238159179691138-3.519470214840112,4.3857421875,0,2.485290527340112,2.014709472650793,4.5,4.5,4.5h9c2.485290527340112,0,4.5-2.014709472659888,4.5-4.5,0-2.147583007808862-1.507019042970569-3.937255859389552-3.519470214849207-4.3857421875Z"})
        ]
      );
  }
});

module.exports = CloudNetworkNodeRound;
module.exports.CloudNetworkNodeRound = CloudNetworkNodeRound;
module.exports.default = CloudNetworkNodeRound;
