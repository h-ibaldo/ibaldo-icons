'use strict';

const { defineComponent, h } = require('vue');

const NodesCircleFourLarge = defineComponent({
  name: 'NodesCircleFourLarge',
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
          h('circle', {"cx":"19","cy":"4.999999999998181","r":"3"}),
          h('circle', {"cx":"5","cy":"4.999999999998181","r":"3"}),
          h('circle', {"cx":"19","cy":"18.999999999998181","r":"3"}),
          h('circle', {"cx":"5","cy":"18.999999999998181","r":"3"}),
          h('path', {"d":"M20.84765625,16.652954101558862c.73291015625-1.390502929691138,1.15234375-2.971923828120453,1.15234375-4.652954101560681,0-1.681030273439319-.41943359375-3.262451171880457-1.15234375-4.652954101559772"}),
          h('path', {"d":"M7.34716796875,20.847778320308862c1.390380859380457.732788085939319,2.9716796875,1.152221679689319,4.65283203125,1.152221679689319s3.262451171880457-.41943359375,4.65283203125-1.152221679689319"}),
          h('path', {"d":"M3.15234375,7.347045898438409c-.73291015625,1.390502929679315-1.15234375,2.971923828120453-1.15234375,4.652954101559772,0,1.681030273440228.41943359375,3.262451171869543,1.15234375,4.652954101560681"}),
          h('path', {"d":"M16.65283203125,3.152221679688409c-1.390380859369543-.732788085940228-2.9716796875-1.152221679690228-4.65283203125-1.152221679690228s-3.262451171869543.41943359375-4.65283203125,1.152221679690228"})
        ]
      );
  }
});

module.exports = NodesCircleFourLarge;
module.exports.NodesCircleFourLarge = NodesCircleFourLarge;
module.exports.default = NodesCircleFourLarge;
