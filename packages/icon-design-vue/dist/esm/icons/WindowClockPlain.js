import { defineComponent, h } from 'vue';

const WindowClockPlain = defineComponent({
  name: 'WindowClockPlain',
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
          h('path', {"d":"M9.999999993642632,21.998779304896743h-5c-1.656854249500611,0-3-1.343145750510303-3-3V4.998779304896743c0-1.656854249493335,1.343145750499389-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v5"}),
          h('line', {"x1":"1.999999993642632","y1":"7.998779304896743","x2":"21.999999993642632","y2":"7.998779304896743"}),
          h('circle', {"cx":"16.999999993642632","cy":"16.998779304896743","r":"5"}),
          h('polyline', {"points":"18.999999993642632 16.998779299956368 16.999999993651727 16.998779300134629 16.999999993651727 14.998779304896743"})
        ]
      );
  }
});

export default WindowClockPlain;
export { WindowClockPlain };
