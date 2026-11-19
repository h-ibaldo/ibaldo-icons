'use strict';

const { defineComponent, h } = require('vue');

const TouchTapDouble = defineComponent({
  name: 'TouchTapDouble',
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
          h('circle', {"cx":"11.974731413245536","cy":"15.998779298537556","r":"5"}),
          h('path', {"d":"M16.974731413245536,8.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625"}),
          h('path', {"d":"M15.974731413245536,3.636840821975056c-1.261108398439319-.40875244140625-2.602661132808862-.6380615234375-4-.6380615234375-1.397338867189319,0-2.738891601558862.22930908203125-4,.6380615234375"})
        ]
      );
  }
});

module.exports = TouchTapDouble;
module.exports.TouchTapDouble = TouchTapDouble;
module.exports.default = TouchTapDouble;
