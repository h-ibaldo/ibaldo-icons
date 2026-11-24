import { defineComponent, h } from 'vue';

const ArrowRepeatCompactOff = defineComponent({
  name: 'ArrowRepeatCompactOff',
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
          h('polyline', {"points":"14.999999999548891 2 17.999999999688953 4.999999999870852 14.999999999818101 8"}),
          h('line', {"x1":"2.999999999998181","y1":"4","x2":"21","y2":"20"}),
          h('g', {}, [
            h('path', {"d":"M18,5h-7c-1.84136962890625,0-3.51153564453125.716552734380457-4.76123046875,1.87890625"}),
            h('path', {"d":"M4.337646484375,9.855712890630457c-.21746826171875.676147460939319-.337646484375,1.395874023439319-.337646484375,2.144287109369543v1"})
          ]),
          h('polyline', {"points":"9.00000000044929 22 6.000000000309228 19.000000000130967 9.000000000178261 16"}),
          h('g', {}, [
            h('path', {"d":"M6,19h7c1.84136962890625,0,3.51153564453125-.716552734369543,4.76123046875-1.87890625"}),
            h('path', {"d":"M19.662353515625,14.144287109380457c.21746826171875-.676147460939319.337646484375-1.395874023438409.337646484375-2.144287109380457v-1"})
          ])
        ]
      );
  }
});

export default ArrowRepeatCompactOff;
export { ArrowRepeatCompactOff };
