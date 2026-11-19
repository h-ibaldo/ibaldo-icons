'use strict';

const { defineComponent, h } = require('vue');

const TouchTapDoubleTwoFingers = defineComponent({
  name: 'TouchTapDoubleTwoFingers',
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
          h('circle', {"cx":"6.974731413245536","cy":"15.998779298537556","r":"5"}),
          h('path', {"d":"M11.974731413245536,8.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625"}),
          h('circle', {"cx":"16.974731413245536","cy":"15.998779298537556","r":"5"}),
          h('path', {"d":"M21.974731413245536,8.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625"}),
          h('path', {"d":"M20.974731413245536,3.636840821975056c-1.261108398439319-.40875244140625-2.602661132808862-.6380615234375-4-.6380615234375-1.772338867189319,0-3.46044921875.35736083984375-5,.99957275390625"}),
          h('path', {"d":"M11.974731413245536,3.998352052443806c-1.53955078125-.6422119140625-3.227661132808862-.99957275390625-5-.99957275390625-1.397338867189319,0-2.738891601558862.22930908203125-4,.6380615234375"})
        ]
      );
  }
});

module.exports = TouchTapDoubleTwoFingers;
module.exports.TouchTapDoubleTwoFingers = TouchTapDoubleTwoFingers;
module.exports.default = TouchTapDoubleTwoFingers;
