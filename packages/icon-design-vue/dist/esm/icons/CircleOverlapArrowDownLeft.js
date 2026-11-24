import { defineComponent, h } from 'vue';

const CircleOverlapArrowDownLeft = defineComponent({
  name: 'CircleOverlapArrowDownLeft',
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
          h('polyline', {"points":"6.999999977209882 12.998782071237656 6.999999976489562 16.998779299960006 10.999997205221007 16.998779300676688"}),
          h('line', {"x1":"7.999999976489562","y1":"15.998779299956368","x2":"16.999999976489562","y2":"6.998779299956368"}),
          h('path', {"d":"M10.999999976489562,8.305175784331368c-.634521484369543-.1920166015625-1.302490234369543-.306396484375-2-.306396484375-3.865966796869543,0-7,3.134033203125-7,7s3.134033203130457,7,7,7c3.865966796880457,0,7-3.134033203125,7-7,0-.697509765625-.114379882810681-1.365478515625-.306396484369543-2"}),
          h('path', {"d":"M15.931030249928881,15.929809573393868c3.42462158203125-.456298828125,6.068969726560681-3.38153076171875,6.068969726560681-6.9310302734375,0-3.865966796875-3.134033203119543-7-7-7-3.549499511709655,0-6.474731445310681,2.64434814453125-6.931030273430224,6.0689697265625"})
        ]
      );
  }
});

export default CircleOverlapArrowDownLeft;
export { CircleOverlapArrowDownLeft };
