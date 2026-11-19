'use strict';

const { defineComponent, h } = require('vue');

const AvatarHeadShortCombed = defineComponent({
  name: 'AvatarHeadShortCombed',
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
          h('path', {"d":"M7,10.999999999918145v-.000001999998858c0-1.104568388791449.895429604908713-1.999998000001142,1.999997999999323-1.999998000001142h6.000004000001354c1.10456839509061,0,1.999997999999323.895429611209693,1.999997999999323,1.999998000001142v.000001999998858"}),
          h('path', {"d":"M15,3.999999999918145V1.999999999918145h-4c-3.865966796875,0-7,3.134033203130457-7,7v5c0,1.030395507810681.78216552734375,1.868896484380457,1.78350830078125,1.978149414060681l.0086669921875.021850585939319c.853271484375,2.190368652340112,2.36358642578125,4.103820800779431,4.37579345703125,5.4453125.54254150390625.361694335939319,1.17999267578125.5546875,1.83203125.5546875s1.28955078125-.192993164060681,1.83209228515625-.5546875c2.01220703125-1.341491699220569,3.52252197265625-3.254943847659888,4.375732421875-5.4453125l.0086669921875-.021850585939319c1.00140380859375-.109252929680224,1.78350830078125-.94775390625,1.78350830078125-1.978149414060681v-5c0-2.761413574220569-2.23858642578125-5-5-5Z"})
        ]
      );
  }
});

module.exports = AvatarHeadShortCombed;
module.exports.AvatarHeadShortCombed = AvatarHeadShortCombed;
module.exports.default = AvatarHeadShortCombed;
